import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Ecommerce Website",
      description: "A multi-page e-commerce website challenge from Frontend Mentor.",
      imgUrl: projImg4,
      url: 'https://exquisite-praline-0e0349.netlify.app/'
    },
    {
      title: "News Release System",
      description: " A backend system to release and manage news for customers.",
      imgUrl: projImg2,
      url: 'https://github.com/liliyao2022/news-release-system-display-page'


    },
    {
      title: "Country Finder App",
      description: "An app enables you to search for any country using an input field.",
      imgUrl: projImg1,
      url: 'https://liliyao2022.github.io/rest-countries-api/'


    },
    {
      title: "Designo Webpage",
      description: "A website includes 5 different templates that make up a 7-page site.",
      imgUrl: projImg3,
      url: 'https://liliyao2022.github.io/designo-app/contact.html'


    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>I accomplished these projects mainly in JavaScript, React, HTML, CSS, and git as a version control system after I finished my Full Stack Bootcamp at Udemy. I practised and gained knowledge about web development, and I also  improved my communication skills.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects Showcase</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
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
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
