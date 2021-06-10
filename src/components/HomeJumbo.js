import githubIcon from "../img/github.png";
import linkedInIcon from "../img/linkedin.png";
const HomeJumbo = () => {
  return (
    <div className="home-jumbo">
      <h1> Web Developer </h1>
      <h1> Bruno Bruno</h1>
      <p>
        I'm a web developer, musician, and a learner with a knack for
        conceptualizing and delivering elegant, user-friendly solutions. Always
        looking to create some awesome stuff.
      </p>
      <span className="jumbo-underline" />
      <div className="jumbo-links">
        <a href="">
          <img alt="github icon" src={githubIcon} />
        </a>
        <a href="">
          {" "}
          <img alt="linked in icon" src={linkedInIcon} />
        </a>
      </div>
    </div>
  );
};

export default HomeJumbo;
