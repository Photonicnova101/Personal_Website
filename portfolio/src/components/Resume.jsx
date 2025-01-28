import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <h2>My Resume</h2>
      <p>Download a full copy of my resume or explore key highlights below.</p>
      <a
        href="/Sam_Pautrat_Resume.docx.pdf" /* Replace with the actual path to your PDF */
        target="_blank"
        rel="noopener noreferrer"
        className="resume-button"
      >
        Download Resume
      </a>

      <div className="resume-highlights">
        <div className="resume-card">
          <h3>Education</h3>
          <p><strong>Cornell University</strong></p>
          <p>B.A. in Information Science<br />Interactive Technologies/Data Science Concentration<br />Expected: May 2026</p>
        </div>
        <div className="resume-card">
          <h3>Experience</h3>
          <p><strong>Grand Corner Realty</strong> – Data Analyst Intern</p>
          <p>June 2022 –August 2022</p>
          <ul>
            <li>Utilized advanced Excel data entry and analysis skills to efficiently process and organize over hundreds of property listings, presenting machine learning produced metrics bi-weekly</li>
            <li>Applied machine learning algorithms to detect high-potential investments, contributing to a projected profit increase of 20% through data-driven insights</li>
            
          </ul>
        </div>
        <div className="resume-card">
          <h3>Skills</h3>
          <ul>
            <li><strong>Design:</strong> Figma, Adobe Creative Suite, Photoshop</li>
            <li><strong>Programming:</strong> Java, Python, C++, HTML/CSS,Javascript, R, SQL, React, </li>
            <li><strong>Other:</strong> Digital Assets, Mathematics, App development, Prototyping, Access management</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
