import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomFooter = () => {
  return (
    <div className="bg-dark text-white w-100">
      <Container fluid className="py-4">
        <Row>
          <Col md="3" className="mb-3">
            <h5 className="text-uppercase">Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col md="3" className="mb-3">
            <h5 className="text-uppercase">Products</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  Product 1
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Product 2
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Product 3
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Product 4
                </a>
              </li>
            </ul>
          </Col>
          <Col md="3" className="mb-3">
            <h5 className="text-uppercase">Support</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </Col>
          <Col md="3" className="mb-3">
            <h5 className="text-uppercase">Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <p className="mb-0">© 2025 Company Name. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CustomFooter;
