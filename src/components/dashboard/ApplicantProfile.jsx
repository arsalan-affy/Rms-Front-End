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
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { useState, useEffect } from "react";
import axios from "axios";

const ApplicantProfile = () => {
  const navigate = useNavigate();
  const [isStatusPanel, setIsStatusPanel] = useState(false);
  const [isOption, setIsOpen] = useState(false);
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

                  <ProgressBar
                    now={75}
                    label="Offered"
                    variant="success"
                    className="mb-3"
                  />

                  <div className="d-flex justify-content-between mt-auto align-items-center">
                    <div className="d-flex justify-content-start gap-3">
                      <div className="position-relative">
                        <button
                          style={{ background: "#29b447" }}
                          className="btn text-white d-flex justify-content-between gap-2 align-items-center "
                          onClick={toggleStatusBar}
                        >
                          Move Forward
                          {isStatusPanel ? <IoChevronDown /> : <IoChevronUp />}
                        </button>
                        {isStatusPanel && (
                          <div
                            className="position-absolute"
                            style={{
                              top: "-1050%",
                              minWidth: "200px",
                              height: "100%",
                            }}
                          >
                            <StatusPanel />
                          </div>
                        )}
                      </div>

                      <Button variant="outline-danger">Reject</Button>
                    </div>
                    <div className="position-relative">
                      <button className="btn " onClick={toggleIsOption}>
                        <HiOutlineDotsVertical />
                      </button>
                      {isOption && (
                        <div
                          className="position-absolute"
                          style={{
                            top: "-500%",
                            left: "-400%",
                            minWidth: "200px",
                            height: "100%",
                          }}
                        >
                          <ActionPanel />
                        </div>
                      )}
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
    <Card
      className=" mb-3 shadow-lg scroll-hide  p-2"
      style={{ height: "400px", overflow: "auto" }}
    >
      <div className="fw-semibold">New</div>
      <div className="mb-1">
        <div className="fw-bold">In Review</div>
        <ul className="list-unstyled">
          <li className="p-1 cursor-pointer status-list-item ">
            *Recruiter Screen
          </li>
          <li className="p-1 cursor-pointer status-list-item ">
            *HM Profile Review
          </li>
        </ul>
      </div>
      <div className="mb-1">
        <div className="fw-bold">Interview</div>
        <ul className="list-unstyled">
          <li className="p-1 cursor-pointer status-list-item ">
            *HM Interview
          </li>
          <li className="p-1 cursor-pointer status-list-item ">
            Tech Interview
          </li>
          <li className="p-1 cursor-pointer status-list-item ">
            Optional Interviews
          </li>
          <li className="p-1 cursor-pointer status-list-item ">
            *HR Interview
          </li>
        </ul>
      </div>
      <div className="mb-1">
        <div className="fw-bold">Offered</div>
        <ul className="list-unstyled">
          <li className="p-1 cursor-pointer status-list-item ">
            Offer Approval
          </li>
          <li className="p-1 cursor-pointer status-list-item ">
            Offer Pending
          </li>
          <li className="p-1 cursor-pointer status-list-item ">
            *Offer Accepted
          </li>
          <li className="p-1 cursor-pointer status-list-item ">*Onboarding</li>
        </ul>
      </div>
      <div className="fw-semibold">Hired</div>
    </Card>
  );
}

export function ActionPanel() {
  return (
    <Card
      className="p-2 shadow-sm scroll-hide"
      style={{ height: "180px", overflow: "auto" }}
    >
      <ul className="list-unstyled">
        <li className="cursor-pointer p-2 mb-2 ">Mark as withdrawn</li>
        <li className="cursor-pointer p-2 mb-2 ">Add to job</li>
        <li className="cursor-pointer p-2 mb-2 ">Add to community</li>
        <li className="cursor-pointer p-2 mb-2 ">Remove from this job</li>
        <li className="cursor-pointer p-2 mb-2 ">Defer</li>
        <li className="cursor-pointer p-2 mb-2 ">Add employee badge</li>
        <li className="text-danger">Delete candidate</li>
        <li className="text-danger">Delete job application</li>
      </ul>
    </Card>
  );
}

export default ApplicantProfile;
