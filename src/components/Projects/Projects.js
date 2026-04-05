import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Bubble from "../../Assets/Projects/bubbletalk.png";
import justdoit from "../../Assets/Projects/justdoit.png";
import soilapp from "../../Assets/Projects/soilapp.png";
import portf from "../../Assets/Projects/portfolio.png";
import { portfolioData } from "../../data/portfolioData";

function Projects() {
  const { projects } = portfolioData;
  const projectImages = [Bubble, soilapp, portf];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          A few projects that best reflect the kind of product engineering I
          enjoy doing.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col md={4} className="project-card" key={project.title}>
              <ProjectCard
                imgPath={projectImages[index] || justdoit}
                isBlog={false}
                title={project.title}
                description={project.description}
                tech={project.tech}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
