'use client';

import React from 'react';
import { useMapDimensions } from '../hooks/useMapDimensions';
import { useState, useEffect } from 'react';
import Content from '../components/Legacy-2025/Content';

export default function Page() {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);  

  const containerStyle = {
    width: "fit-content",
    justifySelf: windowWidth > 800 ? "center" : undefined,  // Applies only when width > 800
    placeSelf: "center"
  };

  return <div className='relative'>
    {/* <h2 className="md:invisible font-bold text-4xl md:text-6xl text-center w-full >">Easter Funday Map</h2> */}
    <div>
        <Content />
    </div>
  </div>
}