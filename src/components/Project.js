import { Card } from "react-bootstrap";

const Project = ({ title, image, link, code }) => {
  return (
    <div className="project">
      <Card style={{ width: "20rem" }}>
        <a href={link} target="_blank" rel="noreferrer">
          <Card.Img variant="top" src={image} />
        </a>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Link href={link} target="_blank" rel="noreferrer">
            {title}
          </Card.Link>
          <Card.Link href={code} target="_blank" rel="noreferrer">
            Code
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Project;
