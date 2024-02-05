import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import React, { useState } from 'react';

export const Projects = () => {
  const [key, setKey] = useState("first");

  const projects = [
    {
      title: "Wingman",
      description: "UX/UI Design",
      imgUrl: projImg1,
      button: "Demo",
      buttonOne: "Github",
      link:""
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3,
      },
 
    // ... other projects
  ];

  const projectsForTab = {
    first: [
      projects[0],
      projects[1],
      projects[2],
    ],
    second: [
      projects[3],
      projects[4],
      projects[5],
    ],
    third: [
      projects[6],
      projects[7],
      projects[8],
      projects[9],
      projects[10],
    ],
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Lorem Ipsum is placeholder text.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first" onSelect={(k) => setKey(k)}>
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Front-end Development</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">UX/UI Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Just for fun!</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projectsForTab["first"].map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {
                      projectsForTab["second"].map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {
                      projectsForTab["third"].map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}