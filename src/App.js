import './App.css';
import educationImg from './education_img.jpg'; // Ensure you have this image in the src folder
import projectsImg from './projects_img.jpg'; // Ensure you have this image in the src folder
import achievementsImg from './achievements_img.jpg'; // Ensure you have this image in the src folder
import skillsImg from './skills_img.jpg'; // Ensure you have this image in the src folder
import languagesImg from './languages_img.jpg'; // Ensure you have this image in the src folder

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>My Portfolio</title>
        <div className="App-header-content">
          <h1>Welcome to Daniel's Portfolio</h1>
          <p>
            Here you will find information about my projects, skills, and professional achievements.
          </p>
          <div className="contact-info">
            <a href="https://github.com/HerreroRocher" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/herrero-daniel" target="_blank">LinkedIn</a>
            <p>Phone Number: 07476684465</p>
            <p>Email: <a href="mailto:danielherrero4465@gmail.com">danielherrero4465@gmail.com</a></p>
          </div>
        </div>
      </header>
      <main>
        <div className="section education" style={{ backgroundImage: `url(${educationImg})` }}>
          <div className="section-content">
            <h2>Education</h2>
            <p>Click to expand</p>
          </div>
        </div>
        <div className="section projects" style={{ backgroundImage: `url(${projectsImg})` }}>
          <div className="section-content">
            <h2>Projects</h2>
            <p>Click to expand</p>
          </div>
        </div>
        <div className="section skills" style={{ backgroundImage: `url(${skillsImg})` }}>
          <div className="section-content">
            <h2>Skills</h2>
            <p>Click to expand</p>
          </div>
        </div>
        <div className="section achievements" style={{ backgroundImage: `url(${achievementsImg})` }}>
          <div className="section-content">
            <h2>Achievements</h2>
            <p>Click to expand</p>
          </div>
        </div>
        <div className="section languages" style={{ backgroundImage: `url(${languagesImg})` }}>
          <div className="section-content">
            <h2>Languages</h2>
            <p>Click to expand</p>
          </div>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Daniel Herrero.</p>
      </footer>
    </div>
  );
}

export default App;
