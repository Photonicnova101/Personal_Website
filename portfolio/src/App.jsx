import React, { useRef } from 'react';
import './styles.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';

const App = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <Header
        onScrollToAbout={() => scrollToSection(aboutRef)}
        onScrollToProjects={() => scrollToSection(projectsRef)}
        onScrollToResume={() => scrollToSection(resumeRef)}
      />
      <main>
        <section ref={aboutRef}>
          <About />
        </section>
        <section ref={projectsRef}>
          <Projects />
        </section>
        <section ref={resumeRef}>
          <Resume />
        </section>
      </main>
    </div>
  );
};

export default App;
