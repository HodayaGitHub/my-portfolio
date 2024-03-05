import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import journey from "../assets/img/journey-img.png";
import shopWorld from "../assets/img/shop-world-img.png";
import appsus from "../assets/img/appsus1.png";
import MineSweeper from "../assets/img/mine-sweeper.png";
import memeGen from "../assets/img/meme-gen.png";
import projImg6 from "../assets/img/12345.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Shop World (store app)",
      description: "A virtual storefront offering a lifelike assortment of gadgets and toys.",
      imgUrl: shopWorld,
      websiteUrl: 'https://shopworld-pub7.onrender.com/toy'
    },
    {
      title: "Airbnb (Journey)",
      description: "A dynamic platform connecting travelers with welcoming hosts worldwide.",
      imgUrl: journey,
      websiteUrl: 'https://journey-ek1u.onrender.com'
    },
    {
      title: "Appsus (Gmail + Keep",
      description: "Merge Gmail's power with Google Keep's simplicity for a unified productivity experience.",
      imgUrl: appsus,
      websiteUrl: 'https://hodayagithub.github.io/Appsus'
    },
    {
      title: "Mine Sweeper",
      description: "A captivating Minesweeper game with a monstrous twist, built to challenge your strategic skills.",
      imgUrl: MineSweeper,
      websiteUrl: 'https://hodayagithub.github.io/MineSweeper'
    },
    {
      title: "Meme Generator",
      description: "MemeGen: A playful site powered by Canvas for crafting custom memes with images and text.",
      imgUrl: memeGen,
      websiteUrl: 'https://hodayagithub.github.io/memeGen'
    },
    {
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Explore a showcase of my diverse web projects, seamlessly blending frontend and backend technologies,
                    powered by MongoDB and React, encompassing a range of websites from small to large-scale.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="" src={colorSharp2}></img>
    </section>
  )
}
