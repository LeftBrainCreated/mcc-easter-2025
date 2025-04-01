'use client';

import React from 'react';
import MapOverlay from './components/MapOverlay';
import { locations } from './components/MapOverlay';
import { useMapDimensions } from './hooks/useMapDimensions';
import MapLabel from './components/MapLabel';

export default function Page() {

  const { width: mapWidth, height: mapHeight } = useMapDimensions(0.75);

  return <div>
      <MapLabel 
        name="Event Map"
        coords={[{x: 10, y: 10}]}
        />
      <MapOverlay
        locations={locations}
        mapWidth={mapWidth}
        mapHeight={mapHeight}
        />
  </div>;
}