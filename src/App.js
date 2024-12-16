import './App.css';
import educationImg from './education_img.jpg'; // Ensure you have this image in the src folder
import projectsImg from './projects_img.jpg'; // Ensure you have this image in the src folder
import achievementsImg from './achievements_img.jpg'; // Ensure you have this image in the src folder
import skillsImg from './skills_img.jpg'; // Ensure you have this image in the src folder
import languagesImg from './languages_img.jpg'; // Ensure you have this image in the src folder

function Section({ title, imageUrl }) {
  return (
    <div className="section" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="section-content">
        <h2>{title}</h2>
        <p>Click to expand</p>
      </div>
    </div>
  );
}

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
            <a href="https://github.com/HerreroRocher" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/herrero-daniel" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <p>Phone Number: 07476684465</p>
            <p>Email: <a href="mailto:danielherrero4465@gmail.com">danielherrero4465@gmail.com</a></p>
          </div>
        </div>
      </header>
      <main>
        <section className="about-me">
          <h2>About Me</h2>
          <p>
            Hi, I'm Daniel. I'm a passionate software engineer with experience in various technologies. I enjoy solving complex problems and building innovative solutions. In my free time, I like to learn new skills and work on personal projects.
          </p>
          <p>
            A second‑year University of Manchester undergraduate with a passion for programming and 6 years of semi‑regular coding experience. I am enthusiastic about solving complex problems and am actively seeking a Software Engineer placement or summer internship to apply my skills. My quick learning ability enables me to rapidly adapt to new technologies and contribute effectively to team projects. I am excited to start my career in computing and have a strong desire to demonstrate my skills in the industry.
          </p>
        </section>
        <Section title="Education" imageUrl={educationImg} />
        <Section title="Projects" imageUrl={projectsImg} />
        <Section title="Skills" imageUrl={skillsImg} />
        <Section title="Achievements" imageUrl={achievementsImg} />
        <Section title="Languages" imageUrl={languagesImg} />
      </main>
      <footer>
        <p>&copy; 2024 Daniel Herrero.</p>
      </footer>
    </div>
  );
}

export default App;
