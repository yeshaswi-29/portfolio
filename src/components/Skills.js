import { Container } from "react-bootstrap";
import aboutpic from "./about-image.webp";
import Button from "@mui/material/Button";
function Skills() {
  return (
    <>
      <Container className="about">
        <Container className="img">
          <img className="computer" src={aboutpic} alt="React Image" />
        </Container>
        <Container className="description">
          <Container>
            <h1>About Me</h1>
          </Container>

          <p>
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <Container className="tags">
            <Button className="text-white" href="#text-buttons">
              Skills
            </Button>
            <Button className="text-white" href="#text-buttons">
              Education
            </Button>

            <Button className="text-white" href="#text-buttons">
              Achievements
            </Button>
          </Container>
          <Container>
            <ul>
              <li>React</li>
              <li>Node</li>
              <li>Mongoose</li>
              <li>Javascript</li>
              <li>DSA</li>
              <li>Core Jva</li>
            </ul>
          </Container>
        </Container>
      </Container>
    </>
  );
}
export default Skills;
