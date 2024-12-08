import React, { useState, useEffect } from 'react';
import instagramLogo from './Styles/aboutImages/instagram.png';
import { Box, CircularProgress } from '@mui/material';
import { ImageList, ImageListItem } from '@mui/material';
import './Styles/Portfolio.css';

// Import images from the Galleryimages folder
import image1 from './Styles/Galleryimages/1.jpg';
import image2 from './Styles/Galleryimages/2.jpg';
import image3 from './Styles/Galleryimages/3.jpg';
import image4 from './Styles/Galleryimages/4.jpg';
import image5 from './Styles/Galleryimages/5.jpg';
import image6 from './Styles/Galleryimages/6.jpg';
import image7 from './Styles/Galleryimages/7.jpg';
import image8 from './Styles/Galleryimages/8.jpg';
import image9 from './Styles/Galleryimages/9.jpg';
import image10 from './Styles/Galleryimages/10.jpg';

// Array of images with their titles
const images = [
  { src: image1, title: 'Beautiful Sunset' },
  { src: image2, title: 'Mountain Landscape' },
  { src: image3, title: 'City Skyline' },
  { src: image4, title: 'Forest Path' },
  { src: image5, title: 'Beach View' },
  { src: image6, title: 'Night Sky' },
  { src: image7, title: 'Lake Reflection' },
  { src: image8, title: 'Snowy Mountain' },
  { src: image9, title: 'Desert Oasis' },
  { src: image10, title: 'Wildlife Close-up' }
];

const Portfolio = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if all images are loaded
    const imagePromises = images.map(image =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image.src;
        img.onload = resolve;
        img.onerror = reject;
      })
    );

    // Wait for all images to load
    Promise.all(imagePromises)
      .then(() => setLoading(false)) // All images loaded
      .catch(() => setLoading(false)); // In case of an error loading images
  }, []);

  return (
    <div className="portfolio-container">
      {/* Instagram section */}
      <Box className="portfolio-box">
        <img src={instagramLogo} alt="Instagram logo" width="50" height="50" className="instagram-logo" />
        <a 
          href="https://www.instagram.com/ambientchords?igsh=MWhzazRqOGVueWh0cw==" 
          target="_blank" 
          rel="noopener noreferrer"
          className="instagram-link"
        >
          ambientchords
        </a>
      </Box>

      {/* Gallery section */}
      <Box className="image-list-box">
        {loading ? (
          <div className="loading-screen">
            <CircularProgress />
          </div>
        ) : (
          <ImageList
            sx={{
              width: '100%',
              height: 700,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', // Responsive grid
              gap: 8,
            }}
            variant="woven"
            cols={2} // Set the number of columns
            gap={8}  // Adjust the gap between the images
          >
            {images.map((image, index) => (
              <ImageListItem key={index}>
                <img
                  srcSet={`${image.src}?w=161&fit=crop&auto=format&dpr=2 2x`} // Add srcSet for better responsiveness
                  src={`${image.src}?w=161&fit=crop&auto=format`}
                  alt={image.title}
                  loading="lazy" 
                />
              </ImageListItem>
            ))}
          </ImageList>
        )}
      </Box>
    </div>
  );
};

export default Portfolio;
