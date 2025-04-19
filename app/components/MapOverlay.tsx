

import { useState, useRef, useEffect, useLayoutEffect } from "react"
import LocationDetailDiv from "./LocationDetailDiv";
import MapLabel from './MapLabel';

export const locations = [
        { 
            name: "3rd-5th", coords: [
                {x:16, y:15},
                {x:24.4, y:7},
                {x:33.5, y:15.3},
                {x:24.6, y:23}
            ],
            position: "right",
            labelLocation: {x: 23, y: 10}
          },
          { 
            name: "4&5's", coords: [
              {x:27, y:23.7},
              {x:35.3, y:16.3},
              {x:44, y:24},
              {x:35.5, y:32}
            ],
            position: "right",
            labelLocation: {x: 34, y: 20}
          },
          { 
            name: "K-2nd", coords: [
              {x:13, y:30},
              {x:21, y:22},
              {x:30, y:30},
              {x:21, y:38}
            ],
            position: "right",
            labelLocation: {x: 20, y: 25}
          },
          { 
            name: "Mission City Church", coords: [
              {x:7.5, y:50},
              {x:24, y:35.5},
              {x:31, y:42},
              {x:31, y:47},
              {x:14.8, y:62},
              {x:7.5, y:55}
            ],
            position: "right",
            labelLocation: {x: 13, y: 42}
          },
          { 
            name: "Connect With Us", coords: [
              {x:34.8, y:35},
              {x:37.7, y:31.7},
              {x:40.5, y:35.5},
              {x:40.5, y:39.5},
              {x:37.5, y:42},
              {x:34.8, y:39.5}
            ],
            position: "right",
            labelLocation: {x: 33, y: 32}
          },
          { 
            name: "Food Trucks", coords: [
              {x:41.5, y:29},
              {x:60, y:12},
              {x:75.5, y:26},
              {x:75.5, y:31.5},
              {x:73, y:34},
              // {x:60, y:23},
              {x:44, y:38},
              {x:41.5, y:36}
            ],
            position: "left",
            labelLocation: {x: 57, y: 27}
          },
          { 
            name: "Games", coords: [
              {x:9, y:71},
              {x:15, y:65},
              {x:25, y:74},
              {x:19, y:80}
            ],
            position: "right",
            labelLocation: {x: 13, y: 73}
          },
          { 
            name: "Toddler Bounce House", coords: [
              {x:21, y:70},
              {x:21, y:60},
              {x:25.5, y:55.5},
              {x:30.4, y:60},
              {x:30.4, y:70},
              {x:25.7, y:74}
            ],
            position: "right",
            labelLocation: {x: 20, y: 66}
          },
          { 
            name: "Hospitality Tent", coords: [
              {x:26.5, y:56},
              {x:26.5, y:51},
              {x:38.5, y:40},
              {x:47, y:48},
              {x:47, y:54},
              {x:35.7, y:64}
            ],
            position: "right",
            labelLocation: {x: 32, y: 44}
          },
          { 
            name: "Walkers-3yrs", coords: [
              {x:27, y:85.5},
              {x:36.5, y:76},
              {x:46, y:85},
              {x:36.5, y:94}
            ],
            position: "right",
            labelLocation: {x: 29, y: 83}
          },
          { 
            name: "Register & Prizes", coords: [
              {x:38.8, y:66},
              {x:38.8, y:63.8},
              {x:41.7, y:61},
              {x:43.3, y:63},
              {x:43.3, y:65.5},
              {x:40.5, y:68}
            ],
            position: "right",
            labelLocation: {x: 39, y: 56}
          },
          { 
            name: "First aid & Baby Changing", coords: [
              {x:38.8, y:76},
              {x:38.8, y:70.5},
              {x:46, y:64},
              {x:60, y:76.5},
              {x:60, y:81.5},
              {x:52.8, y:88}
            ],
            position: "right",
            labelLocation: {x: 42, y: 73}
          },
          { 
            name: "Petting Zoo", coords: [
              {x:50, y:61.5},
              {x:50, y:55},
              {x:61.3, y:45},
              {x:72.5, y:56},
              {x:72.5, y:62},
              {x:61, y:72}
            ],
            position: "left",
            labelLocation: {x: 58, y: 55}
          },
          { 
            name: "Restrooms", coords: [
              {x:65.6, y:76},
              {x:65.6, y:71},
              {x:74.5, y:62},
              {x:77, y:64.5},
              {x:77, y:69.5},
              {x:68, y:78}
            ],
            position: "left",
            labelLocation: {x: 69, y: 68}
          },
          { 
            name: "Bounce Houses", coords: [
              {x:72.3, y:56},
              {x:72.3, y:34.5},
              {x:79, y:28},
              {x:99, y:52},
              {x:84, y:67}
            ],
            position: "left",
            labelLocation: {x: 75, y: 45}
          },
          { 
            name: "Parking", coords: [
              {x:54, y:95},
              {x:99, y:55},
              {x:100, y:56},
              {x:100, y:100},
              {x:60, y:100}
            ],
            position: "left",
            labelLocation: {x: 78, y: 80}
        },
    ]


// Define the type for a single location
interface Location {
  name: string;
  coords: { x: number; y: number }[];
  position: string;
  labelLocation: { x: number; y: number };
}

interface MapOverlayProps {
  locations: Location[];
}

function GetCoordinates(event: React.MouseEvent<HTMLImageElement>, mapRef: React.RefObject<HTMLImageElement | null>) {
  if (mapRef.current) {
    const rect = mapRef.current.getBoundingClientRect();
    const x = Math.floor(((event.clientX - rect.left) / rect.width) * 100);
    const y = Math.floor(((event.clientY - rect.top) / rect.height) * 100);
    console.log(`Coordinates: ${x}, ${y}`);
  }
}

export default function MapOverlay({ locations }: MapOverlayProps) {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const [rect, setRect] = useState({ width: 0, height: 0 });
  const [imgRect, setImgRect] = useState<DOMRect | null>(null);
  const [showLocations, setShowLocations] = useState(false);


  const mapRef = useRef<HTMLImageElement>(null);

  const updateRect = () => {
    if (mapRef.current) {
      setRect(mapRef.current.getBoundingClientRect());
    }
  };

  const handleImageLoad = () => {
    requestAnimationFrame(() => {
      if (mapRef.current) {
        setImgRect(mapRef.current.getBoundingClientRect());
      }
    });
  };

  useEffect(() => {
    let intervalId: any;
  
    // Trigger the first call after 1000ms.
    const timerId = setTimeout(() => {
      setShowLocations(true);
  
      // Start recurring execution every 3000ms.
      intervalId = setInterval(() => {
        setShowLocations(true);
      }, 3000);
    }, 1000);
  
    // Cleanup both the timeout and interval on component unmount.
    return () => {
      clearTimeout(timerId);
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  useLayoutEffect(() => {
    updateRect();
  }, [mapRef]);

  useEffect(() => {
    const handleWindowLoad = () => {
      // Recalculate the layout after all resources have loaded
      if (mapRef.current) {
        setImgRect(mapRef.current.getBoundingClientRect());
      }
    };
  
    window.addEventListener("load", handleWindowLoad);
    return () => window.removeEventListener("load", handleWindowLoad);
  }, []);  

  // Add an event listener on window resize
  useEffect(() => {
    window.addEventListener('resize', updateRect);
    return () => {
      window.removeEventListener('resize', updateRect);
    };
  }, [mapRef]);

  const computedLeft = (rect.width / 100) * 70;
  const computedTop = (rect.height / 100) * 5;

  
  return (
    <div 
      className="hidden xs:block top-0 left-0 h-full items-center justify-center mt-4 overflow-hidden"
      style={{ justifySelf: "anchor-center", alignSelf: "anchor-center" }}
    >
      <img
        id="eventMap"
        src="/images/easter2025.png"
        onLoad={handleImageLoad}
        onClick={(event) => GetCoordinates(event, mapRef)}
        alt="Easter 2025"
        className="w-full min-w-200 max-h-dvh"
        ref={mapRef}
      />


      {showLocations && locations.map((location) => (
        <MapLabel 
          key={location.name}
          location={location}
          mapRef={mapRef}
          activeLocation={activeLocation}
        />
      ))}

    <div
      className={`absolute pointer-events-none font-bold xl:text-5xl lg:text-4xl text-2xl bg-[#847cc1]/90 rounded-xl p-2 text-white text-center z-2`}
      style={{
        left: `${computedLeft}px`,
        top: `${computedTop}px`,
      }}
    >
      <span>Easter Funday</span>
    </div>


      <svg className="absolute w-full h-full min-w-200 top-0 left-0">
        {showLocations && locations.map((location) => {
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
              onClick={() => setActiveLocation(name)}
              />
          );
        })}
      </svg>

      <LocationDetailDiv name={activeLocation} positionLeft={locations.find((l) => {
        return l.name === activeLocation && l.position === "left";
      }) != null} />
    </div>
  );
}