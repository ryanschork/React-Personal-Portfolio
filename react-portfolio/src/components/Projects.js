import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/FolioTN.png";
import projImg2 from "../assets/img/littlelemon.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/wingmane.png";
import projImg5 from "../assets/img/malist.png";
import projImg6 from "../assets/img/xgames.png";
import projImg7 from "../assets/img/BiB.png";
import React, { useState } from 'react';
import xgamesVideo from "../assets/img/xgamesims.mp4"

export const Projects = () => {
  const [key, setKey] = useState("first");

  const projects = [
    {
      title: "Personal Portfolio",
      description: "Front-end Development | React",
      imgUrl: projImg1,
      button: "Demo",
      link: "https://ryanschork.github.io/React-Personal-Portfolio/",
      buttonOne: "Github",
      linkOne:"https://github.com/ryanschork/React-Personal-Portfolio"
    },
    {
      title: "Little Lemon Table Reserve",
      description: "Front-end Development | React",
      imgUrl: projImg2,
      button: "About the project",
      link: "https://github.com/ryanschork/Meta-Capstone-Project/tree/main/LittleLemon_Reserve#little-lemon-booking-website",
      buttonOne: "Github",
      linkOne:"https://github.com/ryanschork/Meta-Capstone-Project/tree/main/LittleLemon_Reserve"
    },
    {
      title: "Wingman",
      description: "UX/UI Design",
      imgUrl: projImg4,
      button: "Figma",
      link: "https://www.figma.com/file/siWM3uAsJfoAUfcqsjxqpP/Wingman-App?type=design&node-id=41%3A2&mode=design&t=N9uA6RPaRGRx75LS-1",
      buttonOne: "Case Study",
      linkOne: "https://docs.google.com/presentation/d/1Om2Y9zOD-U2e9LUiLpN9G4I_EDIBvXnmAbF014uhKhI/edit?usp=sharing"
    },
    {
      title: "MyAnimeList",
      description: "UX/UI Design",
      imgUrl: projImg5,
      button: "Figma",
      link: "https://www.figma.com/file/bMYw1TZhxgw9q5JlTMf5v4/MAL-Redesign?type=design&node-id=3%3A2&mode=design&t=CSlUgd1G0UrtuiiE-1",
      buttonOne: "Case Study",
      linkOne: "https://docs.google.com/presentation/d/1lp17rNmBhmvK59h_1swszz8sgvMZH_FWlh1AXtwdHZ8/edit?usp=sharing",
    },
    {
      title: "X-Games Arcade",
      description: "Brand Extension / Experience Design",
      imgUrl: projImg6,
      button: "Presentation Deck",
      link: "https://docs.google.com/presentation/d/1dWfm3k_YdV-Phh7UJkFDsEmvTOy6xftz7_9_Hxc1z5Y/edit?usp=sharing",
      buttonOne: "Blender Video",
      linkOne: xgamesVideo,
    },
    {
      title: "Fantasy Novel Sample",
      description: "Creative Writing",
      imgUrl: projImg7,
      button: "Chapter 0",
      link: "https://www.wattpad.com/1285070660-born-in-blood-chapter-zero",
      buttonOne: "More to come!",
      linkOne: "https://www.wattpad.com/story/326388037-born-in-blood",
    },

    // ... other projects
  ];

  const projectsForTab = {
    first: [
      projects[0],
      projects[1],
    ],
    second: [
      projects[2],
      projects[3],
      projects[4],
    ],
    third: [
      projects[5],
      projects[6],
      projects[7],
      projects[8],
      projects[9],
    ],
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Check out my latest work!</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first" onSelect={(k) => setKey(k)}>
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Coding</Nav.Link>
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
      {/* <img className="background-image-left" src={colorSharp2}></img> */}
    </section>
  )
}