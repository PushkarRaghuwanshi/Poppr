"use client"
import React, { useEffect, useRef } from 'react';

const Blob = () => {
  const blobRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      if (blobRef.current) {
        blobRef.current.style.left = `${clientX}px`;
        blobRef.current.style.top = `${clientY}px`;
      }
    };

    document.body.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='moving-circle   fixed '>
      <div 
        id="blob" 
        ref={blobRef} 
        className="moving-circle transition duration-300 ease-linear " 

      ></div>
      <div id="blur"></div>
    </div>
  );
};

export default Blob;
