import React, { useState, useEffect } from "react";
import Title from "./Title";
import { CloudUploadIcon, MoveLeft } from "lucide-react";
import { Button, Col, Row } from "react-bootstrap";
import { ReusableInput } from "../candidates/AddCandidates";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { jwtDecode } from "jwt-decode";

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

  const handleQuillChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem("token");
    const decodedToken = jwtDecode(token);
    const createdBy = decodedToken?.claims?.id;
    const role = localStorage.getItem("role");

    const url =
      role === "EMPLOYEE"
        ? `/employee/job/create/${createdBy}`
        : role === "RECRUITMENT_MANAGER"
        ? `/recruitment-manager/job/create/${createdBy}`
        : `/admin/job/create/${createdBy}`;

    if (!url) {
      console.error("Invalid role");
      setLoading(false);
      return;
    }

    try {
      console.log(formData);
      console.log(url);

      const response = await axios.post(url, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log("Job created successfully:", response.data);

      // return
      navigate(-1);
    } catch (error) {
      console.error("Error creating job:", error);
    } finally {
      setLoading(false);
    }
  };

  const [allManager, setAllManager] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decodedToken = jwtDecode(token);
    let parentId;
    if (decodedToken?.claims?.role === "ADMIN") {
      parentId = decodedToken?.claims?.id;
    } else {
      parentId = decodedToken?.claims?.parent?.id;
    }
    const fetchCompanyManagers = async () => {
      try {
        const response = await axios.get(
          `recruitment-manager/parent/${parentId}`
        );
        console.log(response.data);
        setAllManager(() => response.data.meta);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCompanyManagers();
  }, []);

  return (
    <div
      className="d-flex justify-content-between flex-column"
      style={{ zIndex: 100 }}
    >
      <form onSubmit={handleSubmit}>
        <Title title={"Create Job"} icon={CloudUploadIcon} />

        <div
          className="d-flex flex-grow-1 px-5 flex-column"
          style={{ height: "100%" }}
        >
          <Row>
            <Col xs={12} className="mt-3">
              <Row>
                <div>
                  <button
                    className="btn btn-primary btn-theme mx-2 btn-sm"
                    onClick={() => navigate(-1)}
                  >
                    <MoveLeft />
                  </button>
                </div>
                <Col>
                  <div>
                    <label className="mx-2 my-1 fs-5 fw-semibold">
                      Select Recruiter
                    </label>
                    <select
                      name="assignedRecruiter"
                      value={formData.assignedRecruiter}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <option value="">Select a Recruiter</option>
                      {allManager.map((item, index) => (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <label className="mx-2 my-1 fs-5 fw-semibold">
                    Job Title
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
                    Job Description
                  </label>
                  <ReactQuill
                    theme="snow"
                    value={formData.jobDescription}
                    onChange={(value) =>
                      handleQuillChange("jobDescription", value)
                    }
                    modules={{
                      toolbar: [
                        [{ header: "1" }, { header: "2" }, { font: [] }],
                        ["bold", "italic", "underline", "strike", "link"],
                        [{ list: "ordered" }, { list: "bullet" }],
                        ["clean"], // remove formatting button
                      ],
                    }}
                  />

                  <label className="mx-2 my-1 fs-5 fw-semibold">
                    Job Location
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
                    Company Description
                  </label>
                  <ReactQuill
                    theme="snow"
                    value={formData.companyDescription}
                    onChange={(value) =>
                      handleQuillChange("companyDescription", value)
                    }
                    modules={{
                      toolbar: [
                        [{ header: "1" }, { header: "2" }, { font: [] }],
                        ["bold", "italic", "underline", "strike", "link"],
                        [{ list: "ordered" }, { list: "bullet" }],
                        ["clean"], // remove formatting button
                      ],
                    }}
                  />

                  <label className="mx-2 my-1 fs-5 fw-semibold">
                    Job Additional Information
                  </label>
                  <ReactQuill
                    theme="snow"
                    value={formData.jobAdditionalInformation}
                    onChange={(value) =>
                      handleQuillChange("jobAdditionalInformation", value)
                    }
                    modules={{
                      toolbar: [
                        [{ header: "1" }, { header: "2" }, { font: [] }],
                        ["bold", "italic", "underline", "strike", "link"],
                        [{ list: "ordered" }, { list: "bullet" }],
                        ["clean"], // remove formatting button
                      ],
                    }}
                  />

                  <label className="mx-2 my-1 fs-5 fw-semibold">
                    Job Qualification or Required Skills
                  </label>
                  <ReactQuill
                    theme="snow"
                    value={formData.jobQualification}
                    onChange={(value) =>
                      handleQuillChange("jobQualification", value)
                    }
                    modules={{
                      toolbar: [
                        [{ header: "1" }, { header: "2" }, { font: [] }],
                        ["bold", "italic", "underline", "strike", "link"],
                        [{ list: "ordered" }, { list: "bullet" }],
                        ["clean"], // remove formatting button
                      ],
                    }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        <div className="p-3 d-flex align-items-center justify-content-end gap-5">
          <Button
            type="submit"
            variant="warning"
            className="fw-semibold"
            disabled={loading}
          >
            {!loading ? "Create Job" : "Creating"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateJob;
