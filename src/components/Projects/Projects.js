import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Bubble from "../../Assets/Projects/bubbletalk.png";
import justdoit from "../../Assets/Projects/justdoit.png";
import soilapp from "../../Assets/Projects/soilapp.png";
import portf from "../../Assets/Projects/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bubble}
              isBlog={false}
              title="Bubble Talk💬"
              description="A web application offering the facility of realtime messaging, sharing posts and more."
              ghLink="https://github.com/harshita-priya1/Bubble-Talk"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={justdoit}
              isBlog={false}
              title="Just Do It"
              description="A simple Todo App to keep a track of your daily tasks and lets you just do it!."
              ghLink="https://github.com/harshita-priya1/just-do-it"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soilapp}
              isBlog={false}
              title="The Soil App"
              description="An android application that use ML models for detecting soil type with an image and creating a database with corresponding location data."
              ghLink="https://github.com/harshita-priya1/the-soil-app-frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portf}
              isBlog={false}
              title="My portfolio website"
              description="A portfolio website to showcase my skills, projects and blogs."
              ghLink="https://github.com/harshita-priya1/new-portfolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
