import { jwtDecode } from "jwt-decode";
import React, { useState } from "react";
import Title from "./Title";
import { CloudUploadIcon, MoveLeft } from "lucide-react";
import { Button, Col, Row } from "react-bootstrap";
import { ReusableInput } from "../candidates/AddCandidates";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateJob = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobDescription: "",
    jobLocation: "",
    companyDescription: "",
    jobQualification: "",
    jobAdditionalInformation: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  // Handle form submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem("token");

    // Decode JWT to get user ID and role
    const decodedToken = jwtDecode(token);
    const createdBy = decodedToken?.claims?.id; // Adjust this based on your JWT structure
    const role = localStorage.getItem("role"); 

    // Determine the endpoint based on user role
    const url =
      role === "EMPLOYEE"
        ? `/employee/job/create/${createdBy}`
        : role === "RECRUITMENT_MANAGER"
        ? `/recruitment-manager/job/create/${createdBy}`
        : null;

    if (!url) {
      console.error("Invalid role");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(url, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      navigate(-1);
      console.log("Job created successfully:", response.data);
    } catch (error) {
      console.error("Error creating job:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className=" d-flex justify-content-between flex-column"
      style={{ zIndex: 100 }}
    >
      <form onSubmit={handleSubmit}>
        <Title title={"Create Jobs"} icon={CloudUploadIcon} />

        <div
          className=" d-flex flex-grow-1 px-5 flex-column"
          style={{ height: "100%" }}
        >
          <Row>
            <Col xs={12} className="mt-3">
              <Row>
                <div>
                  <button
                    className="btn btn-outline-dark mx-2 btn-sm "
                    onClick={() => navigate(-1)}
                  >
                    <MoveLeft />
                  </button>
                </div>
                <Col>
                  <label className="mx-2 my-1 fs-5 fw-semibold">
                    job Title
                  </label>

                  <ReusableInput
                    label="jobTitle"
                    name="jobTitle"
                    placeholder="Job Title"
                    onChange={handleChange}
                    value={formData.jobTitle}
                    required
                  />
                  <label className="mx-2 my-1 fs-5 fw-semibold">
                    job Description
                  </label>
                  <ReusableInput
                    label="job Description"
                    name="jobDescription"
                    placeholder="job Description"
                    onChange={handleChange}
                    value={formData.jobDescription}
                    required
                  />
                  <label className="mx-2 my-1 fs-5 fw-semibold">
                    job Location
                  </label>
                  <ReusableInput
                    label="jobLocation"
                    type="text"
                    name="jobLocation"
                    placeholder="Enter your job Location"
                    onChange={handleChange}
                    value={formData.jobLocation}
                    required
                  />
                  <label className="mx-2 my-1 fs-5 fw-semibold">
                    company Description
                  </label>
                  <ReusableInput
                    label="company Description"
                    type="text"
                    name="companyDescription"
                    placeholder="Enter your company Description"
                    onChange={handleChange}
                    value={formData.companyDescription}
                    required
                  />
                  <label className="mx-2 my-1 fs-5 fw-semibold">
                    job Additional Information
                  </label>
                  <ReusableInput
                    label="job Additional Information"
                    type="text"
                    name="jobAdditionalInformation"
                    placeholder="Enter your job Additional Information"
                    onChange={handleChange}
                    value={formData.jobAdditionalInformation}
                    required
                  />
                  <label className="mx-2 my-1 fs-5 fw-semibold">
                    job Qualification
                  </label>
                  <ReusableInput
                    label="job job Qualification"
                    type="text"
                    name="jobQualification"
                    placeholder="Enter your job Qualification"
                    onChange={handleChange}
                    value={formData.jobQualification}
                    required
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="p-3  d-flex align-items-center justify-content-end gap-5">
          <Button
            type="submit"
            variant="warning"
            className="fw-semibold"
            disabled={loading}
          >
            {" "}
            {!loading ? "Add Jobs" : "loading"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateJob;
