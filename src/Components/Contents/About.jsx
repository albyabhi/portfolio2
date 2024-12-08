import React from 'react';
import { Grid, Box } from '@mui/material';
import './Styles/About.css';
import photo from './Styles/aboutImages/photo.jpg'; // Correct import statement

const About = () => {
  return (
    <Box className="about-section">
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={8}>
          <h1>I'm Ali Sabah Rasheed</h1>
          <img src={photo} alt="Ali Sabah Rasheed" className="profile-photo" />
          <p>
            A passionate graphic designer with a deep love for arts and creativity.  
            I specialize in graphic design and video editing, aiming to bring innovative solutions to the creative industry.
          </p>
          <p>
            With a background in Mechatronics Engineering, I've developed a unique blend of technical skills and creative thinking, which I apply to my design work. I believe in the power of design to tell stories, solve problems, and create memorable experiences.
          </p>
          <p>
            In addition to graphic design, I enjoy photography, music production, and digital art. I'm always exploring new techniques and tools to enhance my skills and stay ahead of trends in the creative field.
          </p>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
