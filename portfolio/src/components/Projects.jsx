import React from 'react';
import project1 from '../assets/deepfake_img.jpeg';
import project2 from '../assets/nlp_img.png';
import project3 from '../assets/placeholder.png';
import project4 from '../assets/video_c_p_img.png';
import project5 from '../assets/autopattern_trader_img.png';
import project6 from '../assets/heart_attack_analysis.png';
const Projects = () => {
    const projectList = [
      { name: "DeepFake Identity Fraud Detection", 
        description: "AI-powered system for detecting manipulated faces and synthetic media using deep learning. Provides real-time analysis with confidence scoring and visual explanations.",
        image: project1,
        url: "https://github.com/Photonicnova101/Cybersecurity-Deepfake-Identity-Fraud-Detection"
      },
      { name: "Personal Knowledge Assistant - RAG Document QA System", 
        description: "An AI-powered document querying system that enables semantic search across your personal documents using RAG (Retrieval-Augmented Generation) architecture.", 
        image: project3,
        url: "https://github.com/Photonicnova101/RAG-Document-QA-system"
      },
      { name: "Language Processing Algorithm", 
        description: "Utilized Natural Language Processing (NLP) techniques including tokenization, frequency analysis, and KL Divergence to quantify and visualize linguistic differences in food representations across regions and genders. Employed the Fighting Words method to identify the most distinctive food terms associated with specific groups (North vs. South, Male vs. Female). Developed visualizations, including heatmaps and bar charts, to highlight key findings and cultural insights.", 
        image: project2,
        url: "/Language_processing_algo_pdf.pdf"
      },
      { name: "Video Compression Automation Pipeline", 
        description: "An enterprise-grade, serverless video compression pipeline designed for dubbing studios and content creators who need to process large video files efficiently. The system automatically detects new uploads, compresses videos to under 5GB while maintaining quality, and tracks all processing metadata.", 
        image: project4,
        url: "https://github.com/Photonicnova101/Video-compression-automation-pipeline"
      },
      { name: "Backtesting Stock Trading Strategies", 
        description: "Stock_backtesting_web_app is a web-based platform for simulating and evaluating stock trading strategies using historical market data. Designed for investors, analysts, and developers, this application enables users to backtest custom strategies, visualize performance metrics, and gain insights into market trends. Built with a focus on usability, flexibility, and extensibility, it supports a wide range of technical indicators and portfolio configurations, making it a valuable tool for both quantitative research and educational purposes.", 
        image: project5,
        url: "https://github.com/Photonicnova101/Stock_backtesting_web_app"
      },
      { name: "Heart Attack Data Analysis", 
        description: "data analysis project on a gold star kaggle dataset for Cornell University's INFO 2950 class", 
        image: project6,
        url: "/Heart-Attack-Project-pdf.pdf"
      },
    ];
    const handleCardClick = (url) => {
      window.location.href = url;
    };
    return (
      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <div className="project-cards">
          {projectList.map((project, index) => (
            <div className="project-card" 
            key={index}
            onClick={() => handleCardClick(project.url)}>
              <img src={project.image} alt={project.name} className="project-image" />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  

export default Projects;
