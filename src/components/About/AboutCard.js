import React from "react";
import Card from "react-bootstrap/Card";
import { ImArrowDownRight2 } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <strong className="purple">Harshita Priya </strong>
            from <span className="purple"> Bokaro, India.</span>
            <br /> I am a final year B.Tech student at{" "}
            <span className="purple">BIT Mesra, Ranchi</span>.
            <br />
            I'm currently looking for a developer role.
            <br />
            <br />
            Here are some other activities that bring me happiness!
          </p>
          <ul>
            <li className="about-activity">
              <ImArrowDownRight2 /> Sketching
            </li>
            <li className="about-activity">
              <ImArrowDownRight2 /> Reading Books
            </li>
            <li className="about-activity">
              <ImArrowDownRight2 /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
