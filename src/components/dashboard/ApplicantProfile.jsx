import { ArrowLeft, BaggageClaim, Mail, MapPin, Phone } from "lucide-react";
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
import { useNavigate, useParams } from "react-router-dom";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoChevronDown, IoChevronUp, IoReorderThree } from "react-icons/io5";
import { useState, useEffect } from "react";
import axios from "axios";

const ApplicantProfile = () => {
  const navigate = useNavigate();
  const [isStatusPanel, setIsStatusPanel] = useState(false);
  const [isOption, setIsOpen] = useState(false);
  const [progressCount, setProgressCount] = useState(25);

  const handleProgress = () => {
    if (progressCount == 100) {
      setProgressCount(0);
      return;
    }
    setProgressCount((prev) => prev + 25);
  };

  function toggleIsOption() {
    setIsOpen((prev) => !prev);
  }
  function toggleStatusBar() {
    setIsStatusPanel((prev) => !prev);
  }

  const { jobId, applicantId } = useParams();
  const [applicantData, setApplicantData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`job-applications/${applicantId}`);
        console.log(response.data);
        setApplicantData(response.data);
      } catch (error) {
        console.error("Error fetching job applicant data:", error);
      }
    };

    if (applicantId) {
      fetchData();
    }
  }, [jobId, applicantId]);

  // const abc = job-applications/status

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
                        className="text-light text-center p-3 d-flex align-items-center justify-content-center fs-3 bg-primary-main ms-md-4"
                        style={{
                          height: "65px",
                          width: "65px",
                          borderRadius: 999,
                        }}
                      >
                        TJ
                      </div>
                    </Col>

                    {/* Applicant Info */}
                    <Col xs={6} className="fw-bold ">
                      <div className="fs-3 fw-bold">
                        {applicantData?.candidateName}
                      </div>
                      <div className="d-flex flex-column justify-content-between mt-2 w-100 fs-6">
                        <div className="d-flex align-items-center gap-2 mt-2">
                          <MapPin />
                          {applicantData?.location || "-"}
                        </div>
                        <div className="d-flex align-items-center gap-2 mt-2">
                          <Mail />
                          {applicantData?.email || "-"}
                        </div>
                        <div className="d-flex align-items-center gap-2 mt-2">
                          <Phone />
                          {applicantData?.phone || "-"}
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
                    <a href="#" className="text-decoration-none ">
                      ADD EXPERIENCE
                    </a>

                    <h6 className="mt-4">Education</h6>
                    <p>No education details for this candidate yet.</p>
                    <a href="#" className="text-decoration-none ">
                      ADD EDUCATION
                    </a>
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
                  <div className="my-2 fs-1 fw-bold text-capitalize">
                    {" "}
                    {applicantData?.jobTitle || "-"}
                  </div>
                  <div>Bangalore, Karnataka</div>
                  <div>{applicantData?.status || "-"}</div>

                  <div className="mb-1 fs-3">Rating: ★★★☆☆</div>
                  <div className="d-flex align-content-center flex-column ">
                    <ProgressBar
                      now={progressCount}
                      label={
                        (progressCount == 0 && "Offered") ||
                        (progressCount == 25 && "In-Review") ||
                        (progressCount == 50 && "Interview") ||
                        (progressCount == 75 && "Offered") ||
                        (progressCount == 100 && "Hired")
                      }
                      variant="success"
                      className="mb-2"
                    />
                    <div className="d-flex w-100 justify-content-between align-items-center">
                      <span>New</span>
                      <span>In-Review</span>
                      <span>Interview</span>
                      <span>Offered</span>
                      <span>Hired</span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between mt-auto align-items-center">
                    <div className="d-flex justify-content-start gap-3">
                      <div className="position-relative d-flex align-items-center justify-content-center gap-2">
                        <button
                          style={{ background: "#29b447" }}
                          className="btn text-white d-flex justify-content-between gap-2 align-items-center "
                          onClick={handleProgress}
                        >
                          Move Forward
                        </button>

                        {/* <div
                          onClick={toggleStatusBar}
                          className="cursor-pointer btn text-white"
                          style={{ background: "#29b447" }}
                        >
                          {isStatusPanel ? <IoChevronDown /> : <IoChevronUp />}
                        </div>
                        {isStatusPanel && (
                          <div
                            className="position-absolute"
                            style={{
                              top: "-500%",

                              minWidth: "200px",
                              height: "100%",
                            }}
                          >
                            <StatusPanel />
                          </div>
                        )} */}
                        <div className="btn-group dropup">
                          <button
                            type="button"
                            className="btn btn-secondary dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          ></button>
                          <ul className="dropdown-menu">
                            <StatusPanel />
                          </ul>
                        </div>
                      </div>

                      <Button variant="outline-danger">Reject</Button>
                    </div>
                    <div className="position-relative">
                      <div className="btn-group dropup">
                        <div
                          type="button"
                          className=""
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <HiOutlineDotsVertical />
                        </div>
                        <ul className="dropdown-menu">
                          <ActionPanel />
                        </ul>
                      </div>
                    </div>
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

export function StatusPanel() {
  return (
    <ul className="list-unstyled ">
      <li className="p-2 cursor-pointer status-list-item ">New</li>
      <li className="p-2 cursor-pointer status-list-item ">In-Review</li>
      <li className="p-2 cursor-pointer status-list-item ">Interview</li>
      <li className="p-2 cursor-pointer status-list-item ">Offered</li>
      <li className="p-2 cursor-pointer status-list-item ">Hired</li>
    </ul>
  );
}

export function ActionPanel() {
  return (
    <ul className="list-unstyled">
      <li className="cursor-pointer p-2 cursor-pointer status-list-item ">
        Mark as withdrawn
      </li>
      <li className="cursor-pointer p-2 cursor-pointer status-list-item ">
        Add to job
      </li>
      <li className="cursor-pointer p-2 cursor-pointer status-list-item ">
        Add to community
      </li>
      <li className="cursor-pointer p-2 cursor-pointer status-list-item ">
        Remove from this job
      </li>
      <li className="cursor-pointer p-2 cursor-pointer status-list-item ">
        Defer
      </li>
      <li className="cursor-pointer p-2 cursor-pointer status-list-item ">
        Add employee badge
      </li>
      <li className="text-danger p-2 cursor-pointer status-list-item">
        Delete candidate
      </li>
      <li className="text-danger p-2 cursor-pointer status-list-item">
        Delete job application
      </li>
    </ul>
  );
}

export default ApplicantProfile;
