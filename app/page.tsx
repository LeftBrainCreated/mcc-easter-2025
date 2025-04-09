'use client';

import React from 'react';
import MapOverlay from './components/MapOverlay';
import { locations } from './components/MapOverlay';
import { useMapDimensions } from './hooks/useMapDimensions';

export default function Page() {

  const { width: mapWidth, height: mapHeight } = useMapDimensions(0.75);

  return <div>

      <MapOverlay
        locations={locations}
        />
  </div>;
}