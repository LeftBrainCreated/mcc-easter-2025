'use client';

import React from 'react';
import MapOverlay from './components/MapOverlay';
import { locations } from './components/MapOverlay';
import { useMapDimensions } from './hooks/useMapDimensions';
import { useState, useEffect } from 'react';

export default function Page() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { width: mapWidth, height: mapHeight } = useMapDimensions(0.75);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);  

  const containerStyle = {
    width: "fit-content",
    justifySelf: windowWidth > 800 ? "center" : undefined,  // Applies only when width > 800
    alignSelf: "center"
  };

  return <div className='relative' style={containerStyle}>
    <h2 className="md:invisible font-bold text-4xl md:text-6xl text-center w-full >">Easter Funday Map</h2>
    <div>
        <MapOverlay
          locations={locations}
          />
    </div>;

    <div className="md:hidden place-self-center max-w-lg">
      <h2 className="font-bold text-4xl text-center w-full">Welcome to our interactive map!</h2>
      <br /><br />
      <h2 className="font-bold text-4xl text-center w-full">Tap on each activity to findout more details!</h2>
    </div>
  </div>
}