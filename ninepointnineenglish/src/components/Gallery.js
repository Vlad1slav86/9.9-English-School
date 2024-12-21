import React, { useState } from 'react';
import image1 from '../images/student_erika_haruto_osuke.jpg';
import image2 from '../images/student_reisuke.jpg';
import image3 from '../images/sutudent_aoi_DSC02296.jpg';
import image4 from '../images/Justin_2.jpeg';
import image5 from '../images/Justin_yuma_kimika_satsuki.jpg';
import image6 from '../images/Paul_2.jpeg';
import image7 from '../images/Justin_1.jpeg';
import image8 from '../images/Lewis_1s.jpg';
import image9 from '../images/Lewis_2s.jpg';
import image10 from '../images/Paul_3.jpeg';
import image11 from '../images/Lewis_4s.jpg';
import image12 from '../images/Paul_1.jpeg';
import './Gallery.css';

const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
  ];
  

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {/* Gallery Wrapper */}
      <div className="image-gallery-wrapper">
        <div className="image-gallery">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="gallery-image"
              onClick={() => openModal(src)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Selected" className="modal-image" />
            <button className="gallery-close-button" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
