

import { useState, useRef, useEffect } from "react"
import LocationDetailDiv from "./LocationDetailDiv";

export const locations = [
        { 
            name: "egghuntField_1", coords: [
                {x:15, y:16},
                {x:24.4, y:7},
                {x:34, y:16},
                {x:24.6, y:25}
            ]
        },
        { 
          name: "egghuntField_2", coords: [
            {x:26, y:25},
            {x:35, y:16.6},
            {x:44.5, y:25},
            {x:35, y:34}
          ]
        },
        { 
          name: "egghuntField_3", coords: [
            {x:11, y:32},
            {x:20, y:23},
            {x:29, y:32},
            {x:20, y:40}
          ]
        },
        { 
          name: "tent_1", coords: [
            {x:5.5, y:53.5},
            {x:23, y:38},
            {x:31, y:45},
            {x:31, y:50},
            {x:13, y:65.5},
            {x:5.5, y:59.5}
          ]
        },
        { 
            name: "informationTent", coords: [
                {x:34.2, y:37.5},
                {x:37.5, y:33},
                {x:41, y:37.5},
                {x:41, y:42.5},
                {x:37.5, y:45},
                {x:34.2, y:42}
            ]
        },
    //     { 
    //         name: "cornHole", coords: [{
    //             w: {x:15, y:15},
    //             n: {x:24, y:6},
    //             e: {x:33, y:15},
    //             s: {x:24, y:24}
    //         }]
    //     },
    //     { 
    //         name: "bounceCastle", coords: [{
    //             w: {x:15, y:15},
    //             n: {x:24, y:6},
    //             e: {x:33, y:15},
    //             s: {x:24, y:24}
    //         }]
    //     },
    //     { 
    //         name: "cooldownArea", coords: [{
    //             w: {x:15, y:15},
    //             n: {x:24, y:6},
    //             e: {x:33, y:15},
    //             s: {x:24, y:24}
    //         }]
    //     },
    //     { 
    //         name: "egghuntField_4", coords: [{
    //             w: {x:15, y:15},
    //             n: {x:24, y:6},
    //             e: {x:33, y:15},
    //             s: {x:24, y:24}
    //         }]
    //     },
    //     { 
    //         name: "tent_2", coords: [{
    //             w: {x:15, y:15},
    //             n: {x:24, y:6},
    //             e: {x:33, y:15},
    //             s: {x:24, y:24}
    //         }]
    //     },
    //     { 
    //         name: "restRooms", coords: [{
    //             w: {x:15, y:15},
    //             n: {x:24, y:6},
    //             e: {x:33, y:15},
    //             s: {x:24, y:24}
    //         }]
    //     },
    //     { 
    //         name: "pettingZoo", coords: [{
    //             w: {x:15, y:15},
    //             n: {x:24, y:6},
    //             e: {x:33, y:15},
    //             s: {x:24, y:24}
    //         }]
    //     },
    //     { 
    //         name: "bouncyHouses", coords: [{
    //             w: {x:15, y:15},
    //             n: {x:24, y:6},
    //             e: {x:33, y:15},
    //             s: {x:24, y:24}
    //         }]
    //     },
    //     { 
    //         name: "foodTrucks", coords: [{
    //             w: {x:15, y:15},
    //             n: {x:24, y:6},
    //             e: {x:33, y:15},
    //             s: {x:24, y:24}
    //         }]
    //     },
    ]


// Define the type for a single location
interface Location {
  name: string;
  coords: { x: number; y: number }[];
}

interface MapOverlayProps {
  locations: Location[];
  mapWidth: number;
  mapHeight: number;
}

function GetCoordinates(event: React.MouseEvent<HTMLImageElement>, mapRef: React.RefObject<HTMLImageElement>) {
  if (mapRef.current) {
    const rect = mapRef.current.getBoundingClientRect();
    const x = Math.floor(((event.clientX - rect.left) / rect.width) * 100);
    const y = Math.floor(((event.clientY - rect.top) / rect.height) * 100);
    console.log(`Coordinates: ${x}, ${y}`);
  }
}

export default function MapOverlay({ locations, mapWidth, mapHeight }: MapOverlayProps) {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const mapRef = useRef<HTMLImageElement>(null);

  return (
    <div className="absolute">
      <img
        id="eventMap"
        src="/easter2025.png"
        onClick={(event) => GetCoordinates(event, mapRef)}
        alt="Easter 2025"
        className="w-full min-w-200"
        ref={mapRef}
      />

      <svg className="absolute w-full h-full min-w-200 top-0 left-0">
        {locations.map((location) => {
          const { name, coords } = location;
          let rect = { width: 0, height: 0 };

          if (mapRef.current) {
            rect = mapRef.current.getBoundingClientRect();
          }

          const points = coords
            .map((coord) => {
              return `${(rect.width / 100) * coord.x},${(rect.height / 100) * coord.y}`;
            })
            .join(", ");

          const isActive = activeLocation === name;

          return (
            <polygon
              key={name}
              points={points}
              fill={isActive ? "#47bfbb60" : "transparent"}
              stroke="transparent"
              strokeWidth={isActive ? 3 : 2}
              onMouseEnter={() => setActiveLocation(name)}
              onMouseLeave={() => setActiveLocation(null)}
            />
          );
        })}
      </svg>

      <LocationDetailDiv name={activeLocation} />
    </div>
  );
}