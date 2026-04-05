import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { portfolioData } from "../../data/portfolioData";

function Home2() {
  const { profile, specialties } = portfolioData;

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>ABOUT ME</h1>
            <p className="home-about-body">
              I am currently working as a{" "}
              <b className="purple">{profile.title}</b>, building product flows
              across <b className="purple">web, mobile, and APIs</b>.
              <br />
              <br />
              My recent work has been focused on shipping consistent experiences in{" "}
              <b className="purple">Angular and Flutter</b>, while supporting
              them with <b className="purple">Node.js, Express, and databases</b>
              .
              <br />
              <br />
              I care about <b className="purple">clean implementation</b>, fewer
              regressions, and features that stay maintainable after launch.
            </p>
            <Row className="specialty-grid">
              {specialties.map((specialty) => (
                <Col md={6} key={specialty} className="specialty-col">
                  <div className="specialty-card">{specialty}</div>
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ width: "20vw" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={profile.github}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={profile.linkedin}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={`mailto:${profile.email}`}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
