import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from '../assets/img/astronaut.png';
import linkedin from "../assets/img/linkedin.svg";
import github from "../assets/img/github.svg";

function openWebsiteInNewTab(websiteUrl) {
  window.open(websiteUrl, "_blank");
};

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <span onClick={() => openWebsiteInNewTab('https://www.linkedin.com/in/hodaya-ovadia-8402889a/')}>
                <img src={linkedin} alt="" />
              </span>
              <span onClick={() => openWebsiteInNewTab('https://github.com/HodayaGitHub')}>
                <img src={github} alt="" />
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
