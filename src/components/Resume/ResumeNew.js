import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/harshita_resume_onepage.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { portfolioData } from "../../data/portfolioData";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const { profile, experience } = portfolioData;

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pageWidth =
    width > 1200 ? 900 : Math.max(Math.min(width - (width > 768 ? 140 : 36), 900), 280);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <div className="resume-intro">
          <h1 className="project-heading">
            Resume <strong className="purple">Snapshot</strong>
          </h1>
          <p>
            {profile.title} focused on web and mobile product flows, backend
            integrations, and maintainable implementation.
          </p>
          <div className="resume-summary-grid">
            {experience.map((item) => (
              <div className="detail-card compact" key={item.company}>
                <h4>{item.company}</h4>
                <p>{item.title}</p>
                <p>{item.period}</p>
              </div>
            ))}
          </div>
        </div>
        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center resume-document">
            <Page pageNumber={1} width={pageWidth} className="resume-page" />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            Download
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
