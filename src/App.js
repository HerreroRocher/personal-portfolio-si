import React, { useState } from 'react';
import './App.css';
import educationImg from './education_img.jpg'; // Ensure you have this image in the src folder
import projectsImg from './projects_img.jpg'; // Ensure you have this image in the src folder
import achievementsImg from './achievements_img.jpg'; // Ensure you have this image in the src folder
import skillsImg from './skills_img.jpg'; // Ensure you have this image in the src folder
import languagesImg from './languages_img.jpg'; // Ensure you have this image in the src folder

function EducationInfo() {
  return (
    <div>
      <h3>Education</h3>
      <h4>The University of Manchester</h4>
      <p>Location: Manchester, UK</p>
      <p>Degree: BSc in Computer Science with Industrial Experience</p>
      <p>Duration: Sept 2023 ‑ Jul 2027</p>
      <p>• Achieved course units: Computer Engineering(63%), Computer Architecture(77%), Programming 1(71%), First Year Team Project(78%), Data Science(75%), Operating Systems(67%), Computation(72%)</p>
      <p>• Current course units: Software Engineering, Programming Languages & Paradigms, Algorithms and Data Structures, Logic and Modelling, Intro to AI, Databases, Machine Learning, Distributed Systems</p>
      <p>• Expected first class degree (2027)</p>
      <h4>Finchley Catholic High School</h4>
      <p>Location: London, UK</p>
      <p>Duration: Sept 2016 ‑ Jun 2023</p>
      <p>• A‑Levels: A* in Physics, A* in Mathematics, A in Computer Science (160 UCAS points)</p>
      <p>• GCSEs: 11 A*‑B including Mathematics, Computer Science and Physics</p>
    </div>
  );
}

function ProjectsInfo() {
  return (
    <div>
      <h3>Projects</h3>
      <h4>Magic Bakery (Java Bakery Game)</h4>
      <p>Location: Manchester, UK</p>
      <p>Institution: The University of Manchester</p>
      <p>Duration: Apr 2024 ‑ May 2024</p>
      <p>• Developed a Java console simulation of Magic Bakery, incorporating JDK packages and adhering to a UML diagram.</p>
      <p>• Implemented algorithms using various class types (Enums, interfaces, abstract classes) and method modifier types (public, private, static, etc.).</p>
      <p>• Conducted thorough testing and debugging to ensure the accuracy and reliability of game mechanics.</p>
      <p>• Technical Skills: Java, Javadoc, UML Diagrams, Git, Object‑Oriented Programming (OOP), Algorithm Design.</p>
      <p>• Soft Skills: Time Management, Computational Thinking, Attention to Detail, Problem‑Solving.</p>
      <h4>Food Finder (First Year Team Project using Node.js)</h4>
      <p>Location: Manchester, UK</p>
      <p>Institution: The University of Manchester</p>
      <p>Duration: Sept 2023 ‑ Apr 2024</p>
      <p>• Collaborated in an 8‑person team to create a website, which takes user input to return any dishes, or similar, in the area, and giving comparative results.</p>
      <p>• Employed algorithms in JavaScript to use with the HTML/CSS created by my teammates, for the creation of an interactive website.</p>
      <p>• Solely created and used an API to access a relational database, to return relevant data from a local database using a Node.js server.</p>
      <p>• My role was the back‑end developer, where I implemented code to retrieve data from the database, using an API to respond to requests from the front‑end, as well as dealing with sorting, limits and joining tables in the database.</p>
      <p>• Technical Skills: HTML/CSS, JavaScript (Node.js), SQL, API Development, Git.</p>
      <p>• Soft Skills: Time Management, Teamwork, Presentation Skills, Communication, Problem‑Solving.</p>
      <h4>Dodger (Python Tkinter Game)</h4>
      <p>Location: Manchester, UK</p>
      <p>Institution: The University of Manchester</p>
      <p>Duration: Oct 2023 ‑ Nov 2023</p>
      <p>• Solely developed an interactive third‑person game using Python, which incorporates images, shapes, text, leaderboard, etc., where the user’s character has to avoid enemies to progress to the next level.</p>
      <p>• Developed random enemy generation algorithms while keeping the number of enemies and enemy speed correlated to the level number.</p>
      <p>• Implemented algorithms for collision detection, save/load, leaderboard, control changing, etc., using encapsulation and polymorphism.</p>
      <p>• Designed SQL databases to store player information (username, password hashes, scores, time remaining), to display the top five scores after the user loses the game.</p>
      <p>• Technical Skills: Python(Tkinter), File Manipulation, Git.</p>
      <p>• Soft Skills: Time Management, Computational Thinking, Problem‑solving, Creativity.</p>
      <h4>Jungle Shooter (AQA A‑Level Project using Python PyGame)</h4>
      <p>Location: London, UK</p>
      <p>Institution: Finchley Catholic High School</p>
      <p>Duration: Jun 2022 ‑ Feb 2023</p>
      <p>• Developed a third‑person shooter game where the user avoids being shot by enemies, and eliminates them to progress to the next of infinitely produced levels.</p>
      <p>• Developed random enemy generation algorithms while keeping the number of enemies and bullet speed correlated to the level number.</p>
      <p>• Encapsulated enemies, bullet and the player in separate classes, with the enemy class inheriting directly from the player class to use similar shooting, movement and collision methods of the player.</p>
      <p>• Technical Skills: Python(Pygame), SQL.</p>
      <p>• Soft Skills: Time Management, Presentation skills, Documentation, Testing.</p>
      <p>Source code available upon request.</p>
    </div>
  );
}

function SkillsInfo() {
  return (
    <div>
      <h3>Skills</h3>
      <h4>Programming</h4>
      <p>Python (PyGame, Tkinter), HTML/CSS, JavaScript (Node.js, React.js), SQL, Java, Git, Unity, C#, Data Parsing, Algorithm Development, State Management, API Interaction.</p>
      <h4>Soft Skills</h4>
      <p>Problem‑Solving, Analytical Thinking, Attention to Detail, Self‑Learning, Teamwork, Time Management, Communication, Technical Communication, Project Management, Resilience, Passion for Computing.</p>
      <h4>Miscellaneous</h4>
      <p>ARM Assembly Language, Microsoft Office, Command Prompt, Git Bash, Unix-like systems</p>
    </div>
  );
}

function AchievementsInfo() {
  return (
    <div>
      <h3>Achievements</h3>
      <p>2016 Semi‑Finalist, BBC Top Class (Similar to University Team Challenge Show) Edinburgh, UK</p>
      <p>2017 Gold, Junior Mathematical Challenge (UK Mathematics Trust) London, UK</p>
      <p>2018 Gold, Junior Mathematical Challenge (UK Mathematics Trust) London, UK</p>
      <p>2021 C1.3 Spanish Certification, Agrupación de Lengua y Cultura Españolas London, UK</p>
    </div>
  );
}

function LanguagesInfo() {
  return (
    <div>
      <h3>Languages</h3>
      <p>English C2 Native</p>
      <p>Spanish C1 Fluent</p>
    </div>
  );
}

function Section({ title, imageUrl }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderContent = () => {
    switch (title) {
      case 'Education':
        return <EducationInfo />;
      case 'Projects':
        return <ProjectsInfo />;
      case 'Skills':
        return <SkillsInfo />;
      case 'Achievements':
        return <AchievementsInfo />;
      case 'Languages':
        return <LanguagesInfo />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="section" style={{ backgroundImage: `url(${imageUrl})` }} onClick={() => setIsExpanded(!isExpanded)}>
        <div className="section-content">
          <h2>{title}</h2>
          {!isExpanded ? <p>Click to expand</p> : <p>Click to collapse</p>}
        </div>
      </div>

      {isExpanded && (
        <div className="information">
          {renderContent()}
        </div>
      )}
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
