import { useState, useEffect } from "react";

export default function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resiize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return width;
}
