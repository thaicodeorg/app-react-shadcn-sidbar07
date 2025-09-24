import { useRef, useEffect } from 'react';

// Make sure the script is loaded globally, for example, in index.html
// <script type="text/javascript" src="https://api.sphere.gistda.or.th/map/?key=[YOUR-KEY-API]"></script>
import './map.css';

export default function SphereMap  () {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {

    if (mapRef.current) {

      mapInstanceRef.current = new window.sphere.Map({
        placeholder: mapRef.current,
        
      });
      mapInstanceRef.current.location({ lon: 100.510847, lat: 13.743757 });
      mapInstanceRef.current.zoom(14.255);
    }


    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
      }
    };
  }, []); 
 

  return (
      <div className="map-wrap">
        <div ref={mapRef} className="map" />
      </div>
  );
};


