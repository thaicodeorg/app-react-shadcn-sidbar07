import { useRef, useEffect, useState } from 'react';
// Make sure the script is loaded globally, for example, in index.html
// <script type="text/javascript" src="https://api.sphere.gistda.or.th/map/?key=[YOUR-KEY-API]"></script>
import './map.css';

export default function SphereMap() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  
  // 1. We use state to track if the external map library is ready.
  // This state will trigger a re-render once the script has loaded.
  const [isMapReady, setIsMapReady] = useState(false);

  // 2. This useEffect checks for the global 'window.sphere' object.
  // It runs once when the component mounts.
  useEffect(() => {
    // If the object is already available, update the state immediately.
    if (window.sphere) {
      setIsMapReady(true);
      return;
    }

    // Otherwise, set up an interval to poll for the object.
    const checkInterval = setInterval(() => {
      if (window.sphere) {
        clearInterval(checkInterval);
        setIsMapReady(true);
      }
    }, 500); // Check every half second

    // Cleanup function to prevent memory leaks if the component unmounts
    return () => clearInterval(checkInterval);
  }, []);

  // 3. This useEffect initializes the map.
  // It runs only when `isMapReady` becomes true AND the DOM element is available.
  useEffect(() => {
    if (isMapReady && mapRef.current) {
      mapInstanceRef.current = new window.sphere.Map({
        placeholder: mapRef.current,
      });
      mapInstanceRef.current.location({ lon: 100.510847, lat: 13.743757 });
      mapInstanceRef.current.zoom(14.255);
    }

    // Cleanup function to destroy the map instance when the component unmounts
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
      }
    };
  }, [isMapReady]); // This dependency array is crucial.

  return (
    <div className="map-wrap">
      {/* Optional: Add a loading message while waiting for the script */}
      {!isMapReady && <div className="map-loading">Loading map...</div>}
      <div ref={mapRef} className="map" />
    </div>
  );
}