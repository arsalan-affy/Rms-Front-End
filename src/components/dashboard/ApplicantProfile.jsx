import { ArrowLeft, BaggageClaim, Mail } from "lucide-react";
import Title from "./Title";
import {
  Button,
  Card,
  Col,
  Nav,
  ProgressBar,
  Row,
  Container,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ApplicantProfile = () => {
  const navigate = useNavigate();
  return (
    <Container fluid className="p-3">
      <Title icon={BaggageClaim} title={"Job Applicants"} />
      <Row>
        {/* Main Content */}
        <Col xs={12} className="p-4">
          {/* Row with d-flex to make columns equal height */}
          <Row className="d-flex" style={{ height: "100%" }}>
            {/* Left Section */}
            <Col md={8} className="h-100 m-0 p-0">
              <Card className="border-0">
                <Card.Body
                  className="border-black rounded-2 shadow-main"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #B9C0FF, #fff)", // Gradient from top left to bottom right
                  }}
                >
                  <ArrowLeft
                    onClick={() => navigate(-1)}
                    className="position-absolute cursor-pointer "
                  />
                  <Row>
                    {/* TJ Circle */}
                    <Col
                      xs={6}
                      sm={2}
                      className="d-flex align-items-center justify-content-center rounded-2 "
                    >
                      <div
                        className="text-light text-center p-3 d-flex align-items-center justify-content-center fs-3 bg-primary-main rounded-circle ms-md-4"
                        style={{ height: "100px", width: "100px" }}
                      >
                        TJ
                      </div>
                    </Col>

                    {/* Applicant Info */}
                    <Col xs={6} className="fw-bold ">
                      <div className="fs-3 fw-bold">Tom Jones</div>
                      <div className="d-flex flex-column justify-content-between mt-2 w-100 fs-6">
                        <div>Bangalore, Karnataka</div>
                        <div className="d-flex align-items-center gap-2 mt-2">
                          <Mail />
                          abc@gmail.com
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>

                <Card className="shadow-main h-100 mt-4">
                  <Card.Header className="bg-light" style={{ border: "none" }}>
                    <Nav variant="tabs" defaultActiveKey="profile">
                      <Nav.Item>
                        <Nav.Link eventKey="profile">Profile</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="resume">Resume</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Card.Header>
                  <Card.Body style={{ border: "none" }}>
                    <h6>Experience</h6>
                    <p>No experience details for this candidate yet.</p>
                    <a href="#">ADD EXPERIENCE</a>

                    <h6 className="mt-4">Education</h6>
                    <p>No education details for this candidate yet.</p>
                    <a href="#">ADD EDUCATION</a>
                  </Card.Body>
                </Card>
              </Card>
            </Col>

            {/* Right Section */}
            <Col md={4} className="h-100 ">
              <Card className="mb-4 shadow-main h-100 ms-md-2">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div className="fs-6 bg-warning fw-bold p-1 px-3 rounded-3 w-50">
                    Applicant Profile
                  </div>
                  <div className="my-2 fs-1 fw-bold">Sr. Test Engineer</div>
                  <div>Bangalore, Karnataka</div>

                  <div className="mb-2">Rating: ★★★☆☆</div>

                  <ProgressBar
                    now={75}
                    label="Offered"
                    variant="success"
                    className="mb-3"
                  />

                  <div className="d-flex justify-content-between mt-auto">
                    <button
                      style={{ background: "#29b447" }}
                      className="btn text-white"
                    >
                      Move Forward
                    </button>
                    <Button variant="outline-danger">Reject</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ApplicantProfile;
