import { useRef, useEffect } from 'react';

// Make sure the script is loaded globally, for example, in index.html
// <script type="text/javascript" src="https://api.sphere.gistda.or.th/map/?key=[YOUR-KEY-API]"></script>

export default function SphereMap  () {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Check if the global 'sphere' object and the DOM element exist
    if (window.sphere && mapRef.current) {

      // Initialize the map, referencing the DOM element
      mapInstanceRef.current = new window.sphere.Map({
        placeholder: mapRef.current
      });

      // Optional: Center the map or add other configurations here
      // mapInstanceRef.current.setView([latitude, longitude], zoomLevel);
    }

    // This is the cleanup function that runs when the component is unmounted
    return () => {
      if (mapInstanceRef.current) {
        // Here you would call a method to destroy the map instance
        // based on the Sphere API documentation.
        // For example: mapInstanceRef.current.destroy();
      }
    };
  }, []); // The empty array ensures this effect runs only once on mount

  return (
    <div
      ref={mapRef}
      style={{ width: '100%', height: '500px' }}
    ></div>
  );
};
