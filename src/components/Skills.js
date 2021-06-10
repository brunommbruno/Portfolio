import { Container, Row, Col } from "react-bootstrap";

const Skills = () => {
  return (
    <div className="skills">
      <Container>
        <Row>
          <Col className="f">
            <h2>Web Stack</h2>
            <p>HTML, CSS, JavaScript, PhP</p>
            <p> NodeJS, React, Redux</p>
            <p> Laravel, mySQL, Rest APIs</p>
          </Col>
          <Col>
            <h2>Technologies</h2>
            <p>Github, Gulp, C#</p>
            <p>npm, Vagrant, Postman</p>
            <p>Unity, SASS, VS CODE</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
