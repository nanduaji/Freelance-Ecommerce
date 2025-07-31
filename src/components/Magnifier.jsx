import React, { useState, useRef } from "react";

const MagnifierImage = ({ src, width, height, zoom = 2 }) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const { top, left } = imgRef.current.getBoundingClientRect();
    const x = e.pageX - left - window.pageXOffset;
    const y = e.pageY - top - window.pageYOffset;
    setMagnifierPosition({ x, y });
  };

  return (
    <div
      className="relative"
      style={{ width, height }}
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseMove}
    >
      <img
        ref={imgRef}
        src={src}
        alt="Zoomable"
        className="w-full h-full object-cover rounded-[12px]"
      />
      {showMagnifier && (
        <div
          className="absolute pointer-events-none rounded-full border-2 border-gray-300 shadow-lg"
          style={{
            top: `${magnifierPosition.y - 75}px`,
            left: `${magnifierPosition.x - 75}px`,
            width: "150px",
            height: "150px",
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${width * zoom}px ${height * zoom}px`,
            backgroundPosition: `-${magnifierPosition.x * zoom - 75}px -${
              magnifierPosition.y * zoom - 75
            }px`,
            zIndex: 10,
          }}
        ></div>
      )}
    </div>
  );
};

export default MagnifierImage;
