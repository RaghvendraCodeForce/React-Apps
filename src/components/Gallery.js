// src/components/Gallery.js
import React from 'react';
import './Gallery.css';

// Sample images to display in the gallery
const images = [
    { id: 1, src: '/images/image1.jpeg', alt: 'Image 1' },
    { id: 2, src: '/images/image2.jpeg', alt: 'Image 2' },
    { id: 3, src: '/images/image3.jpeg', alt: 'Image 3' },
    { id: 4, src: '/images/image4.jpeg', alt: 'Image 4' },
    { id: 5, src: '/images/image5.jpeg', alt: 'Image 5' },
  ];  

const Gallery = () => {
  return (
    <div className="gallery">
      {images.map((image) => (
        <div key={image.id} className="gallery-item">
          <img src={image.src} alt={image.alt} className="gallery-image" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
