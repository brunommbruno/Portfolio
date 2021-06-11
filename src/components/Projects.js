import Project from "./Project";
import { Container } from "react-bootstrap";
const Projects = () => {
  return (
    <Container className="projects" id="projects">
      <Project
        title={"RelaxMe"}
        image={"https://i.imgur.com/4NoFXCd.png"}
        link="https://www.relaxme.space/"
        code="https://github.com/brunommbruno/relaxme"
      />
      <Project
        title={"Gift Tracker"}
        image={"https://i.imgur.com/Lnrb1iI.png"}
        link="https://nelboh.github.io/gift-tracker-app/"
        code={"https://linkmix.co/5022813"}
      />
      <Project
        title={"Football Scores"}
        image={"https://i.imgur.com/smJ7Cq9.png"}
        link="https://brunommbruno.github.io/football-webapp/"
        code="https://github.com/brunommbruno/football-webapp"
      />
      <Project
        title={"Run"}
        image="https://i.imgur.com/4dMuiKX.png"
        link="https://play.google.com/store/apps/details?id=com.brunommbruno.Run"
      />
      <Project
        title="Team Selector"
        image="https://i.imgur.com/n9hTOZI.png"
        code="https://linkmix.co/5022953"
        link="https://brunommbruno.github.io/team-selector-app/#/"
      />
    </Container>
  );
};

export default Projects;
