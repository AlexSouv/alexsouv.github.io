import React from 'react';
import './HomePage.css';
import profilePic from './images/me.jpg';

const HomePage = () => {
  return (
    <div className="page-wrapper">
      <div className="home-container">
        <div className="left-column">
          <img src={profilePic} alt="Alex Souv" className="profile-pic" />
          <h1> Alex Souv</h1>
          <p>Email: alex4souv2@gmail.com</p>
          <p>Phone: (916) 832-1907</p>
          <p>Location: Sacramento, CA</p>
          <p><a href="https://www.linkedin.com/in/alexsouv/" target="_blank" rel="noopener noreferrer"> LinkedIn </a> </p>
          <p><a href="https://github.com/AlexSouv" target="_blank" rel="noopener noreferrer"> GitHub </a> </p>
          <p>Hello, my name is Alex Souv, I recently graduated from California State University, Sacramento
             on May 2025. I graduated with a B.S. in Computer Science.</p>
          <p>Aspiring and highly motivated software developer with experience in full-stack technologies
            such as JavaScript, React and Tailwind CSS. Eager to learn new frameworks and programming
            languages to build innovative and efficient solutions, with a focus on continuous
            improvement and collaboration.</p>
        </div>

        <div className="right-column">
          <section>
            <h2>Skills</h2>
            <p>Languages: JavaScript, C, C++, Python, HTML/CSS</p>
            <p>Technologies: React, Git, Tailwind CSS, AWS </p>
          </section>

          <section>
            <h2>Education</h2>
            <p><strong> California State University, Sacramento</strong>, B.S. Computer Science<br />Graduated: May 2025</p>
          </section>

          <section>
            <h2>Projects</h2>

            <div className="resume-item">
              <strong>
                <a href="https://github.com/zzzkevon/the-lamby-shop" target="_blank" rel="noopener noreferrer">
                  The Lamby Shop
                </a>
              </strong>
              <ul>
                <li>Developing a website to streamline transactions for a small business client.</li>
                <li>Using JavaScript and Tailwind CSS for front-end development.</li>
                <li>Usage of AWS DynamoDB for the backend.</li>
              </ul>
            </div>


            <div className="resume-item">
              <strong>2D Mobile Game</strong>
              <ul>
                <li>Developed a mobile game using principles of application development, computer graphics and object-oriented programming..</li>
                <li>Implemented with a top-down design in Java..</li>
              </ul>
            </div>

            <div className="resume-item">
              <strong>
                <a href="https://github.com/AlexSouv/Movie-REST-API" target="_blank" rel="noopener noreferrer">
                  Movie Query Engine
                </a>
              </strong>
              <ul>
                <li>Developed a REST API to recommend movies using external APIs.</li>
                <li>Provided user a way to track and recommend movies based off already viewed movies.</li>
                <li>Using Java, Gradle, and Docker for development.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <footer>
        <p>&copy; 2025 by Alex Souv, designed and developed by Alex Souv</p>
      </footer>
    </div>
  );
}

export default HomePage;