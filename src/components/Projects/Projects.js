import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/farmer.jpg";
import emotion from "../../Assets/Projects/emotion1.jpg";
import editor from "../../Assets/Projects/codeEditor.png";
import student from "../../Assets/Projects/student.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import payment from "../../Assets/Projects/payment.png";

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
              imgPath={leaf}
              isBlog={false}
              title="ABES Solutions"
              description="Empowering Farmers with Cutting-edge Tools! Explore seed prices, stay informed with real-time weather updates, unlock government schemes, and more. Cultivate success with smarter farming practices at your fingertips. 🌱🚜 "
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition Based Attendance System"
              description="Design a Python-based face recognition attendance system for educational institutions and workplaces,enabling accurate and real-time tracking of individuals for efficient attendance management andrecord-keeping."
              ghLink="https://github.com/y.a.s.h_s.h"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={student}
              isBlog={false}
              title="College Website"
              description="Design a college website to provide essential information, such as courses, faculty, admission details,
              events, and resources, ensuring a user-friendly experience for prospective students, current students,
              and staff members."
              ghLink="https://github.com/sh3yash/college-website"
             // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={payment}
              isBlog={false}
              title="INTEGRATED PAYMENTS GATEWAY"
              description="Develop an integrated payments gateway solution that seamlessly integrates with a website or
              application, enabling secure and efficient online transactions, payment processing, and seamless
              financial transactions between customers and businesses."
              ghLink="https://github.com/sh3yash/payment-integration"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
