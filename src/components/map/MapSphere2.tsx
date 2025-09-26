
import Sphere from "gistda-sphere-react-demo"

export default function MapSphere2() {
    const userApiKey = '488804D0CA9848B5A9B7B6484350F43D';
    return (
        <Sphere.MapView
            apiKey={userApiKey} 
            ref={(r: any) => {
                // Handle map reference here if needed
            }}
            zoom={15} // Initial zoom level
            onReady={() => {
                // Callback when the map is ready
            }}
            onClick={(location: any) => {
                // Handle click events and access location data
                console.log({ location });
            }}
            onLocation={async () => {
                // Fetch and handle map location updates
            }}
            onDrag={async () => {
                // Handle map drag events
            }}
        />
    )
}
