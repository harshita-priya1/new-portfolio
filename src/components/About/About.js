import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { portfolioData } from "../../data/portfolioData";

function About() {
  const { experience, education, achievements } = portfolioData;

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              More About <strong className="purple">Me! ☆.｡.:* </strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Skills </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong>
        </h1>
        <Toolstack />

        <Github />

        <Row className="resume-insights">
          <Col lg={8} className="resume-left">
            <h1 className="project-heading">
              Professional <strong className="purple">Experience</strong>
            </h1>
            <div className="resume">
              {experience.map((item) => (
                <div className="resume-item" key={`${item.company}-${item.title}`}>
                  <h4>{item.title}</h4>
                  <h5 className="resume-title">
                    {item.company} | {item.period}
                  </h5>
                  <p className="resume-location">{item.location}</p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={4} className="resume-right">
            <div className="detail-panel">
              <h1 className="project-heading">
                Education <strong className="purple">& Wins</strong>
              </h1>
              <div className="detail-card">
                <h4>{education.institution}</h4>
                <p>{education.period}</p>
                <p>{education.degree}</p>
                <p>{education.detail}</p>
              </div>
              <div className="detail-card">
                <h4>Achievements</h4>
                {achievements.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
