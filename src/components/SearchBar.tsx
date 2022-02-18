import { ChangeEvent, useContext, useRef } from "react"
import { SearchResults } from "."
import { PlacesContext } from "../context"

export const SearchBar = () => {

    const debourceRef = useRef<number>()

    const { searchPlacesByTerm } = useContext(PlacesContext)

    const onQueryChanged = ( event: ChangeEvent<HTMLInputElement> ) => {
        if( debourceRef.current ) clearTimeout( debourceRef.current )

        debourceRef.current = setTimeout(()=>{
            searchPlacesByTerm( event.target.value )
        },350)

    }   

    return (
        <div className="search-container">
            <input 
                type="text" 
                className="form-control"
                placeholder="Buscar lugar"
                onChange={onQueryChanged}/>

            <SearchResults />

        </div>
    )
}
