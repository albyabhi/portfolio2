import React from 'react';
import './Styles/Resume.css';
import { Button } from '@mui/material';

const Resume = () => {
  return (
    <div className="resume-container">
      <header className="header">
        <h1>ALI SABAH RASHEED</h1>
        <h2>Graphic Designer</h2>
        
      </header>

      <section className="profile-summary">
        <h3>Profile Summary</h3>
        <p>A passionate individual with a strong interest in arts and creativity, aiming to contribute value to the creative industry through innovative designs and teamwork.</p>
      </section>

      <section className="education">
        <h3>Education</h3>
        <ul>
          <li>
            <strong>Diploma in Mechatronics Engineering</strong>  
            <span>Acharya Institute of Technology, 2019–2022</span>
            <p>Second topper in the class, recognized with a letter of appreciation.</p>
          </li>
          <li><strong>Cambridge O Levels</strong> - 74%</li>
          <li><strong>Edexcel A Levels</strong></li>
          <li><strong>Certificate in Graphic Design and Video Editing</strong> from Avodha</li>
        </ul>
      </section>

      <section className="skills">
        <h3>Skills</h3>
        <ul>
          <li>Graphic Design</li>
          <li>Video Editing</li>
          <li>Photography</li>
          <li>Music Production</li>
          <li>Digital Design</li>
          <li>Multitasking</li>
          <li>Leadership</li>
          <li>Teamwork</li>
          <li>Time Management</li>
          <li>Effective Communication</li>
          <li>Critical Thinking</li>
        </ul>
      </section>

      <section className="languages">
        <h3>Languages</h3>
        <ul>
          <li><strong>English</strong>: Fluent</li>
          <li><strong>Dhivehi</strong>: Fluent</li>
          <li><strong>Malayalam</strong>: Basics</li>
        </ul>
      </section>

      <section className="interests-hobbies">
        <h3>Interests & Hobbies</h3>
        <ul>
          <li>Photography</li>
          <li>Art</li>
          <li>Music Production</li>
          <li>Digital Design</li>
        </ul>
      </section>

      <section className="portfolio">
        <h3>Portfolio</h3>
        <p><a href="https://www.instagram.com/ambientchords" target="_blank" rel="noopener noreferrer">Instagram: Ambient Chords</a></p>
      </section>
      <section>
        <Button href='https://drive.google.com/file/d/1Qa2rRbyqPTrSHPZI_gXoIFc5HmvwP8eE/view?usp=sharing'>Download Resume</Button>
      </section>
    </div>
  );
};

export default Resume;
