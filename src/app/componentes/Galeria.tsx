'use client'
// pages/automatic-gallery.tsx
import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const images = ['galeria1.svg', 'galeria2.svg', 'galeria3.svg', 'galeria4.svg', 'galeria5.svg', 'galeria6.svg']; 

const AutomaticGalleryPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia el valor de 3000 para ajustar la velocidad del desplazamiento automático

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Head>
        <title>Automatic Image Gallery</title>
      </Head>
      <div className="container mt-4">
        <div className="row g-0">
          {images.map((image, i) => (
            <div
              key={i}
              className={`col-md-2 ${i === currentIndex ? 'active' : ''}`}
            >
              <img
                className="img-fluid"
                src={`/images/${image}`}
                alt={`Image ${i + 1}`}
                style={{ height: '180px' }}
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .active {
          transform: scale(1.1);
          transition: transform 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default AutomaticGalleryPage;
