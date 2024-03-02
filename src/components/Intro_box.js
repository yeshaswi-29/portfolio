import { Container} from "react-bootstrap";
import hero from "./hero-image.webp";
import Typewriter from "typewriter-effect";
import Button from "react-bootstrap/Button";
function IntroBox() {
  return (
    <>
      <Container className="box">
        <img className="girl" src={hero} alt="React Image" />
        <Container className="naming">
          <h1 className="name">Hello, I'm</h1>
          <br></br>
          <h1 className="name1">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Yeshaswini")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Frontend Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Backend Developer")

                  .start();
              }}
            />
          </h1>
          <Container className="Button">
            <button >Hire Me</button>
            
          </Container>
        </Container>
      </Container>
    </>
  );
}
export default IntroBox;