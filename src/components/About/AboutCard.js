import React from "react";
import Card from "react-bootstrap/Card";
import { ImArrowDownRight2 } from "react-icons/im";
import { portfolioData } from "../../data/portfolioData";

function AboutCard() {
  const { profile, education, personal } = portfolioData;

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <strong className="purple">{profile.name}</strong> from{" "}
            <span className="purple">{profile.location}</span>.
            <br />I am currently based in{" "}
            <span className="purple">{profile.basedIn}</span> and working as a{" "}
            <span className="purple">{profile.title}</span>.
            <br />
            <br />
            I graduated from{" "}
            <span className="purple">{education.institution}</span> with a{" "}
            <span className="purple">{education.degree}</span> and{" "}
            <span className="purple">{education.detail}</span>.
            <br />
            <br />
            Outside engineering, these are the things that keep me grounded:
          </p>
          <ul>
            {personal.map((item) => (
              <li className="about-activity" key={item}>
                <ImArrowDownRight2 /> {item}
              </li>
            ))}
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
