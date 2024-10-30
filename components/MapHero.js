'use client'

import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

function MapHero() {
  const mapRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // INITIALIZE GOOGLE MAP
    const initializeMap = async () => {
      const loader = new Loader({
        apiKey: 'AIzaSyBIjfY1NpOpwnMvDQ7U9eEY1FALqagw2Cc',
        version: 'weekly',
      });

      // Wait for the loader to be ready
      await loader.load();

      // LOCATION
      const { Map } = await loader.importLibrary('maps');
      const locationMap = {
        lat: 28.011314,
        lng: -26.075150,
      };

      // MARKER
      const options = {
        center: locationMap,
        zoom: 13,
        mapId: 'NEXT_MAP_TUTS',
      };

      // Delay the initialization of the map by 100ms
      setTimeout(() => {
        const map = new Map(mapRef.current, options);

        // Set loading state to false once the map is initialized
        setIsLoading(false);
      }, 100);
    };

    initializeMap();
  }, []);

  return (
    <div className="w-full h-600">
      {isLoading ? (
        <div className="flex items-center justify-center h-full">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="bg-gray-500" ref={mapRef}></div>
      )}
    </div>
  );
}

export default MapHero;