import React, { useEffect, useRef, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { Container, Row, Col, Card } from "react-bootstrap";

const ApplicantProfile = ({ data, ref }) => {
  const [active, setActive] = useState("Details");

  useEffect(() => {
    console.log(data);
  }, []);
  const handleSelect = (name) => {
    setActive((prev) => name);
  };

  return (
    <div
      ref={ref}
      className="rounded shadow overflow-hidden d-none d-md-block "
      style={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        width: "30vw",
      }}
    >
      <ul className="nav nav-pills d-flex items-center  p-2 bg-white gap-1 justify-content-start ">
        <button
          className={`btn btn-sm border ${
            active == "Details" ? "active-btn" : "not-active"
          }`}
          aria-current="page"
          href="#"
          onClick={() => handleSelect("Details")}
        >
          Details
        </button>
        <button
          className={`btn btn-sm border ${
            active == "Resume" ? "active-btn" : "not-active"
          }`}
          href="#"
          onClick={() => handleSelect("Resume")}
        >
          Resume
        </button>

        <button
          className={`btn tn-sm border ${
            active == "Meeting" ? "active-btn" : "not-active"
          }`}
          href="#"
          tabindex="-1"
          aria-disabled="true"
          onClick={() => handleSelect("Meeting")}
        >
          Meeting
        </button>
      </ul>
      <div style={{ minHeight: "200px", background: "#fff" }}>
        <Profile data={data[0]} />
        {active == "Details" && <Details />}
        {active == "Resume" && <Resume />}
        {active == "Meeting" && <Meeting />}
      </div>
    </div>
  );
};

export default ApplicantProfile;

const Details = ({ data }) => {
  return (
    <>
      <div className="p-3">
        <div className="fs-4">Pipeline</div>
        <div className="d-flex align-items-center justify-content-between gap-1 text-white">
          <div className="bullet-div first  px-4 py-2 bullet-div">first</div>
          <div className="bullet-div second  px-4 py-2 bullet-div">second</div>
          <div className="bullet-div third  px-4 py-2 bullet-div">third</div>
          <div className="bullet-div forth  px-4 py-2 bullet-div">fourth</div>
          <div className="bullet-div fifth  px-4  py-2 bullet-div">fifth</div>
        </div>
      </div>
      <div className="p-2">
        <div className="d-flex align-items-center gap-2 justify-content-end">
          <button
            className="btn text-white btn-sm"
            style={{ background: "#2D82B5" }}
          >
            Candidate details
          </button>
          <button
            className="btn text-white btn-sm"
            style={{ background: "#2D82B5" }}
          >
            Next Status
          </button>
          <button
            className="btn text-white btn-sm"
            style={{ background: "#2D82B5" }}
          >
            <FaChevronDown />
          </button>
          <button
            className="btn btn-sm text-danger"
            style={{ background: "#ffa5a5" }}
          >
            reject
          </button>
          <button className="btn">
            <BsThreeDotsVertical />
          </button>
        </div>
      </div>
    </>
  );
};
const Resume = () => {
  const resumeUrl = "https://msnlabs.com/img/resume-sample.pdf";
  return (
    <div className="h-full w-full" style={{ height: "400px" }}>
      <div className="p-2 fs-4">Resume</div>
      <iframe
        src={resumeUrl}
        width="100%"
        height="100%"
        title="Applicant Resume"
      />
    </div>
  );
};

const Meeting = () => {
  return (
    <div>
      <div className="p-2 fs-4">Interview</div>
      <Container className="d-flex justify-content-center pb-2 bg-white">
        <Card style={{ width: "500px" }}>
          <Card.Body>
            <Row>
              <Col xs={6}>
                <p className="fw-bold m-0">Interviewer:</p>
                <p>Omar Khan</p>
              </Col>
              <Col xs={6}>
                <p className="fw-bold m-0">Round:</p>
                <p>Technical round</p>
              </Col>
            </Row>

            <Row>
              <Col xs={6}>
                <p className="fw-bold m-0">Hiring Manager:</p>
                <p>khan</p>
              </Col>
              <Col xs={6}>
                <p className="fw-bold m-0">Recruiter:</p>
                <p>Arsalan lala</p>
              </Col>
            </Row>

            <Row>
              <Col xs={6}>
                <p className="fw-bold m-0">Date:</p>
                <p>5th December, 2024</p>
              </Col>
              <Col xs={6}>
                <p className="fw-bold m-0">Time:</p>
                <p>07:00PM - 08:00PM</p>
              </Col>
            </Row>

            <Row>
              <Col>
                <p className="fw-bold m-0">Position:</p>
                <p>UI/UX Designer</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
      <Container className="d-flex py-3">
        <input className="rounded-0 px-2 w-75 border-1 border-gray " />
        <button
          className="btn btn-sm rounded-0 p-2 border-black"
          style={{ background: "#2D82B5", color: "#FFFFFF" }}
        >
          Join
        </button>
      </Container>
    </div>
  );
};

const Profile = ({ data }) => {
  console.log(data);
  return (
    <div className=" blue">
      <div
        className="p-3 d-flex align-items-center justify-content-between gap-2"
        style={{
          background: "#88CDF680",
        }}
      >
        <div className="d-flex align-items-center justify-content-between gap-3 ">
          <div
            className="overflow-hidden "
            style={{ width: "3rem", height: "3rem", borderRadius: "100%" }}
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
              style={{ width: "3rem", height: "3rem" }}
              alt=""
            />
          </div>
          <div>
            <div>{data?.name}</div>
            <div style={{ color: "gray" }}>{data?.job}</div>
          </div>
        </div>
        {/* <Trash color="red" size={18} /> */}
        <FaRegTrashAlt size={20} />
      </div>
    </div>
  );
};
