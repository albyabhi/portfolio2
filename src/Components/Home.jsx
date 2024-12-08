import React, { useState } from 'react';
import Appbar from './Appbar/Appbar';
import About from './Contents/About';
import { Box, Container } from '@mui/material';
import Portfolio from './Contents/Portfolio';
import Contact from './Contents/Contact';
import Resume from './Contents/Resume';

const Home = () => {
  const [selectedSection, setSelectedSection] = useState('about');

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <Box>
      {/* Fixed and Sticky Appbar */}
      <Appbar
        onSectionChange={handleSectionChange}
        sx={{
          position: 'sticky',  // Make AppBar sticky
          top: 0,              // Stick to the top
          zIndex: 1200,        // Ensure it's on top of other content
        }}
      />

      {/* Main Content Section */}
      <Box
        component="main"
        sx={{
          // Margin top to adjust for AppBar height
          py: 4, // Padding top and bottom
          minHeight: '100vh', // Ensure the content spans full height
        }}
      >
        <Container maxWidth="lg">
          {/* Render Components Based on the Selected Section */}
          {selectedSection === 'about' && <About />}
          {selectedSection === 'portfolio' && <Portfolio />}
          {selectedSection === 'contact' && <Contact />}
          {selectedSection === 'resume' && <Resume />}
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
