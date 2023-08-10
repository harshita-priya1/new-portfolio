import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My GitHub Journey
      </h1>
      <GitHubCalendar
        username="harshita-priya1"
        blockSize={15}
        blockMargin={5}
        color="#391946"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
