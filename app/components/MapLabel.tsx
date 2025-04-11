import { useState, useLayoutEffect, useEffect } from 'react';

interface Location {
    name: string;
    coords: { x: number; y: number }[];
    position: string;
    labelLocation: { x: number; y: number };
  }

interface MapLabelProps {
    location: Location;
    mapRef: React.RefObject<HTMLDivElement | null>;
    activeLocation: string | null;
}
  
export default function MapLabel({ location, mapRef, activeLocation }: MapLabelProps) {
  const [rect, setRect] = useState({ width: 0, height: 0 });

  const updateRect = () => {
    if (mapRef.current) {
      setRect(mapRef.current.getBoundingClientRect());
    }
  };

  useLayoutEffect(() => {
    updateRect();
  }, [mapRef]);

  // Add an event listener on window resize
  useEffect(() => {
    window.addEventListener('resize', updateRect);
    return () => {
      window.removeEventListener('resize', updateRect);
    };
  }, [mapRef]);

  const computedLeft = (rect.width / 100) * location.labelLocation.x;
  const computedTop = (rect.height / 100) * location.labelLocation.y;

  return (
    <div
      className={`absolute pointer-events-none font-bold max-w-40 text-xs md:text-sm lg:text-base ${activeLocation == location.name ? 'bg-[#47bfbb]/90' : 'bg-[#847cc1]/90'} rounded-xl p-1.5 text-white text-center z-2 mt-10 md:mt-15`}
      onClick={() => console.log(`Clicked on ${location.name}`)}
      style={{
        left: `${computedLeft}px`,
        top: `${computedTop}px`,
      }}
    >
      <span>{location.name}</span>
    </div>
  );
}