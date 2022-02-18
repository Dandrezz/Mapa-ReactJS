import { useEffect, useReducer } from "react"
import { searchApi } from "../../apis"
import { getUserLocation } from "../../helpers"
import { Feature, PlacesResponse } from "../../interfaces/places"
import { PlacesContext } from "./PlacesContext"
import { placesReducer } from "./PlacesReducer"

export interface PlacesState {
    isLoading: boolean;
    userLocation?: [ number, number ];
    isLoadingPlaces: boolean;
    places: Feature[]
}

const INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined,
    isLoadingPlaces: false,
    places: []
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const PlacesProvider = ({ children }:Props) => {

    const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE)

    useEffect(() => {
        getUserLocation()        
            .then( lngLat => dispatch({ type: 'setUserLocation', payload: lngLat }) )
    }, [])

    const searchPlacesByTerm = async ( query:string ) => {
        if( query.length === 0 ){
            dispatch({type:'setPlace',payload:[]})
            return []
        }
        if( !state.userLocation ) throw Error('No hay ubicación de Usuario')

        dispatch({ type: 'setLoadingPlaces' })

        const resp = await searchApi.get<PlacesResponse>(`/${query}.json`,{
            params:{
                proximity: state.userLocation.join(',')
            }
        });

        dispatch({ type: 'setPlace', payload: resp.data.features })

        return resp.data.features

    }

    return (
        <PlacesContext.Provider value={{
            ...state,

            searchPlacesByTerm
        }}>
            { children }
        </PlacesContext.Provider>
    )
}

export default PlacesProvider
