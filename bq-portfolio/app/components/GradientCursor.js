"use client";
import { useEffect, useState } from "react";

function GradientCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.pageX,
        y: e.pageY, 
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute top-0 left-0 w-full h-full z-30 transition duration-300"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(114, 173, 232, 0.05), transparent 80%)`,
      }}
    ></div>
  );
}

export default GradientCursor;


