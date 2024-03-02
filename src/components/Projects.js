import { Container } from "react-bootstrap";

function Projects() {
  return (
    <>
      <Container className="projects">
        <Container className="heading">
          <h1>MY PROJECTS</h1>
        </Container>
        <Container className="project-cards">
          <div class="card">
            <div class="main-content">
              <div class="header">
                <span>Article on</span>
                <span>29-June-2023</span>
              </div>
              <p class="heading">Different ways to use CSS in React</p>
              <div class="categories">
                <span>React</span>
                <span>Css</span>
              </div>
            </div>
            <div class="footer">by Harsh Gupta</div>
          </div>

          <div class="card">
            <div class="main-content">
              <div class="header">
                <span>Article on</span>
                <span>29-June-2023</span>
              </div>
              <p class="heading">Different ways to use CSS in React</p>
              <div class="categories">
                <span>React</span>
                <span>Css</span>
              </div>
            </div>
            <div class="footer">by Harsh Gupta</div>
          </div>

          <div class="card">
            <div class="main-content">
              <div class="header">
                <span>Article on</span>
                <span>29-June-2023</span>
              </div>
              <p class="heading">Different ways to use CSS in React</p>
              <div class="categories">
                <span>React</span>
                <span>Css</span>
              </div>
            </div>
            <div class="footer">by Harsh Gupta</div>
          </div>
        </Container>
      </Container>
    </>
  );
}
export default Projects;
