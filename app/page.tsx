'use client';

import React from 'react';
import MapOverlay from './components/MapOverlay';
import { locations } from './components/MapOverlay';
import { useMapDimensions } from './hooks/useMapDimensions';

export default function Page() {

  const { width: mapWidth, height: mapHeight } = useMapDimensions(0.75);

  return <div className='overflow-auto relative' style={{ width: "fit-content", justifySelf: "center", alignSelf: "center" }}>
    {/* <h2 className="font-bold text-center w-full lg:h-0>">Easter Funday Map</h2> */}
    <div>
        <MapOverlay
          locations={locations}
          />
    </div>;
  </div>
}