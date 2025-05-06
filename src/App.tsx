import flaskLogo from './assets/flask.png'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="mailto:zach@petchworks.ca" target="_blank">
          <img src={flaskLogo} className="logo" alt="Petch Works Logo" />
        </a>
      </div>
      <h1>Petch Works</h1>
      <a href="mailto:zach@petchworks.ca" className="button">
        Get In Touch
      </a>
      <div className="card">
        <h3>What I Do</h3>
        <p>I help startups and businesses go from idea to polished, scalable web/mobile products by designing modern, efficient architectures and helping them hire the right technical talent.</p>
        <h3>Who I Help</h3>
        <ul>
          <li>Non-technical founders with an app idea but no roadmap</li>
          <li>Startup teams missing clear system architecture</li>
          <li>Agencies or businesses who need senior-level oversight on technical direction</li>
          <li>Proprietors looking for tools or online/mobile presence</li>
        </ul>
        <h3>Services I Offer</h3>
        <ul>
          <li>Technical Architecture Planning: Choosing the right stack, designing scalable systems, and documenting a clean roadmap.</li>
          <li>MVP Execution Strategy: A 2-week process to define your MVP scope, estimate build time, and prepare hiring plans.</li>
          <li>Team Formation: I help source and vet developers, designers, and devops talent through my trusted network.</li>
          <li>Hands-on Execution: Build early prototypes, coordinate delivery, or design and delivery of full fledged web and/or mobile apps.</li>
        </ul>
        <h3>Why Work With Me?</h3>
        <p>
          I have over 15 years in the tech industry, across a wide range of disciplines including software development, brand design, marketing, sales, project management, and team leadership.
        </p>
        <p>
          I have deep technical and product knowledge, a strong understanding of the startup landscape, and a proven track record of building and scaling successful products.
        </p>
        <p>
          I have a strong network of trusted collaborators, including developers, designers, and product managers, who I can bring in to help with your project.
        </p>
        <p>
          I am passionate about helping startups and businesses succeed, and I take pride in my work. I am committed to delivering high-quality results and providing exceptional service to my clients.
        </p>
        <p>
          I am a strong communicator and collaborator, and I believe in building long-term relationships with my clients. I take the time to understand your business and your goals, and I work closely with you to ensure that we are aligned on the vision for your project.
        </p>
        <p>
          I am flexible and adaptable, and I can work with you to find the right solution for your needs. Whether you need a full-time CTO, a part-time consultant, or just someone to help you get started, I can help.
        </p>
      </div>
      <footer>
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          <i className="fab fa-linkedin linkedin-icon"></i>
          Find me on LinkedIn
        </a>
        <p className="public-service-announcement">
          This page is a work in progress.
        </p>
      </footer>
    </>
  )
}

export default App
