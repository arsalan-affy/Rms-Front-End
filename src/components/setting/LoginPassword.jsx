import React, { useState, useEffect } from "react";
import Title from "../dashboard/Title";
import { CloudUploadIcon, MoveLeft, Lock } from "lucide-react";
import { Button, Col, Row } from "react-bootstrap";
import { ReusableInput } from "../candidates/AddCandidates";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { jwtDecode } from "jwt-decode";

const LoginPassword = () => {
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
        <Title title={"Login & Password"} icon={Lock} />

        <div
          className="d-flex flex-grow-1 px-5 flex-column"
          style={{ height: "100%" }}
        >
          <Row>
            <Col xs={12} className="mt-3">
              <Row>
                <div>
                  <button
                    className="btn btn-outline-dark mx-2 btn-sm"
                    onClick={() => navigate(-1)}
                  >
                    <MoveLeft />
                  </button>
                </div>
                <Col>
                <label className="mx-2 my-1 fs-5 fw-semibold">
                    Email
                  </label>
                  <ReusableInput
                    label="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={formData.jobTitle}
                    required
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
            {!loading ? "Create Jobs" : "loading"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginPassword;
