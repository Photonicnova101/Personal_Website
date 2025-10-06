import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <h2>My Resume</h2>
      <p>Download a full copy of my resume or explore key highlights below.</p>
      <a
        href="\portfolio\src\assets\Sam_Pautrat_Resume.pdf" /* Replace with the actual path to your PDF */
        target="_blank"
        rel="noopener noreferrer"
        className="resume-button"
      >
        Download Resume
      </a>

      <div className="resume-highlights">
        <div className="resume-card">
          <h3>Education</h3>
          <p><strong>GPA:</strong>3.7</p>
          <p><strong>Cornell University</strong></p>
          <p>B.A. in Information Science<br />User Experience/Data Science Double Concentration<br />Expected: December 2026</p>
        </div>
        <div className="resume-card">
          <h3>Experience</h3>
          <p><strong>Grand Corner Realty</strong> – Software Engineering Intern/Data Analyst Intern</p>
          <p>June 2022 –August 2023</p>
          <ul>
            <li>Built ML models in Python to identify high-potential real estate deals, projected 20% profit increase.</li>
            <li>Processed and analyzed hundreds of listings using Excel and SQL to surface key trends and metrics.</li>
            <li>Automated data pipelines with AWS (EC2, Glue, Athena) and Apache Kafka to streamline listing analysis.</li>
            <li>Delivered bi-weekly reports with visualizations to support strategic investment decisions.</li>
          </ul>
          <p><strong>RippleMatch</strong> – Software Engineering Intern</p>
          <p>December 2023 – March 2024</p>
          <ul>
            <li>Built and deployed a job description similarity algorithm that outperformed peer models by 13%.</li>
            <li>Deployed application to AWS with CI/CD pipelines for automated testing and uptime.</li>
            <li>Implemented system monitoring and failover to minimize downtime and improve reliability.</li>
          </ul>
          <p><strong>Human Voice Over</strong> – Software Engineering Intern</p>
          <p>June 2025-August 2025</p>
          <ul>
            <li>Built and deployed Backend Infrastructure to automate database optimal file compression and database migration to be sent to business partners in line with business workflow (AWS,N8N,Airtable)</li>
            
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
