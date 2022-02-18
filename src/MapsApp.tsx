import { MapProvider, PlacesProvider } from "./context"
import { HomeScreen } from "./screens/HomeScreen"

const MapsApp = () => {
    return (
        <PlacesProvider>
            <MapProvider>
                <HomeScreen />
            </MapProvider>
        </PlacesProvider>
    )
}

export default MapsApp
