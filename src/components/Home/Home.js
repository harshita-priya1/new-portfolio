import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { portfolioData } from "../../data/portfolioData";

function Home() {
  const { profile, heroStats } = portfolioData;

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div className="hero-badge">{profile.title}</div>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> {profile.name.toUpperCase()}</strong>
              </h1>

              <p className="hero-tagline">{profile.tagline}</p>

              <div style={{ padding: "10px 50px 0", textAlign: "left" }}>
                <Type />
              </div>

              <p className="hero-summary">{profile.summary}</p>

              <div className="hero-actions">
                <Button as={Link} to="/resume" variant="primary">
                  View Resume
                </Button>
                <Button
                  as={Link}
                  to="/project"
                  variant="primary"
                  className="hero-secondary-btn"
                >
                  Explore Projects
                </Button>
              </div>

              <Row className="hero-metrics">
                {heroStats.map((item) => (
                  <Col md={4} sm={4} xs={12} key={item.label} className="metric-col">
                    <div className="metric-card">
                      <span className="metric-label">{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
