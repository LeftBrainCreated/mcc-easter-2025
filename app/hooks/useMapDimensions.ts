import { useState, useEffect } from "react";

export function useMapDimensions(aspectRatio: number = 0.75) {
    // initial dimensions: at least 600px wide
    const [dimensions, setDimensions] = useState({
      width: 600,
      height: 600 * aspectRatio,
    });
  
    useEffect(() => {
      function handleResize() {
        // Ensure the width is at least 600 or full window width
        const width = Math.max(window.innerWidth, 600);
        setDimensions({ width, height: width * aspectRatio });
      }
      // Call it once to set the initial dimensions
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [aspectRatio]);
  
    return dimensions;
  }