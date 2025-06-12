import React from 'react';
import me from "./images/me.jpg";
import './AboutPage.css'; // optional: style this separately

function AboutPage() {
  return (
    <div>
      <header>
        <h1>About Me</h1>
      </header>

      <main>
        <img src={me} alt="Picture of me" width="300" height="300"/>

        <p>
          Hello, my name is Alex Souv. I am recent graduated from California State University, Sacramento on May 2025.
          <br />
          My major is computer science. This website was made for both CSC 193A
          and also to practice and understand how to create a html website. I am in the process of editing the website to be more
          resume/portfolio oriented after graduating.
          <br />
        </p>
      </main>

      <footer>
        <p>&copy; 2023 by Alex Souv, designed and developed by Alex Souv</p>
      </footer>
    </div>
  );
}

export default AboutPage;