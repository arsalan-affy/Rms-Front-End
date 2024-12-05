import React, { useState, useEffect } from "react";
import Title from "../../components/dashboard/Title";
import { CloudUploadIcon, MoveLeft } from "lucide-react";
import { Button, Col, Row } from "react-bootstrap";
import { ReusableInput } from "../../components/candidates/AddCandidates";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { showToast } from "../../components/global/showToast";

const CreateJobFields = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    label: "",
    type: "singleSelect",
    category: "job",
    visibility: "INTERNAL",
    required: false,
  });
  const [allManager, setAllManager] = useState([]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      required: e.target.checked,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData);

    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found");
      setLoading(false);
      return;
    }

    // Decode the token to get the createdBy value
    const decodedToken = jwtDecode(token);
    const createdBy = decodedToken?.claims?.id;
    console.log(createdBy);
    // Add createdBy to the formData object as parentId
    const updatedFormData = {
      ...formData,
      parentId: createdBy,
      options: "string",
    };
    console.log(updatedFormData);
    try {
      const response = await axios.post("custom-fields", updatedFormData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      showToast("Field created successfully:", response.data);
      // navigate(-1);
    } catch (error) {
      console.error("Error creating job:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchCompanyManagers = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      const decodedToken = jwtDecode(token);
      const parentId =
        decodedToken?.claims?.role === "ADMIN"
          ? decodedToken?.claims?.id
          : decodedToken?.claims?.parent?.id;

      try {
        const response = await axios.get(
          `recruiter/parent/${parentId}`
        );
        setAllManager(response.data.meta || []);
      } catch (error) {
        console.error("Error fetching managers:", error.message);
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
        <Title title="Create Job Fields" icon={CloudUploadIcon} />

        <div
          className="d-flex flex-grow-1 px-5 flex-column"
          style={{ height: "100%" }}
        >
          <Row>
            <Col xs={6} className="mt-3">
              <Row>
                <div>
                  <button
                    className="btn btn-primary btn-theme mx-2 btn-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(-1);
                    }}
                  >
                    <MoveLeft />
                  </button>
                </div>
                <Col className="my-4">
                  <h4>Field Information</h4>
                  <label className="mx-2 my-1 fs-5 fw-semibold">
                    Field Name
                  </label>
                  <ReusableInput
                    label="label"
                    name="label"
                    placeholder="Field Name"
                    onChange={handleChange}
                    value={formData.label}
                    required
                  />
                  <div>
                    <label className="mx-2 my-1 fs-5 fw-semibold">Type</label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <option selected value="SELECT">
                        Single Select
                      </option>
                      <option value="TEXT">Free Text</option>
                    </select>
                  </div>
                  <div>
                    <label className="mx-2 my-1 fs-5 fw-semibold">
                      Field Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <option selected value="JOB">
                        Job
                      </option>
                      <option value="ORG">Org</option>
                    </select>
                  </div>
                  <div>
                    <label className="mx-2 my-1 fs-5 fw-semibold">
                      Visibility
                    </label>
                    <select
                      name="visibility"
                      value={formData.visibility}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <option selected value="INTERNAL">
                        Internal
                      </option>
                      <option value="PUBLIC">Public</option>
                    </select>
                  </div>
                  <div className="my-2">
                    <input
                      type="checkbox"
                      checked={formData.required}
                      onChange={handleCheckboxChange}
                    />
                    <label className="mx-2 my-1 fs-5 fw-semibold">
                      Required Field
                    </label>
                  </div>
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
            {!loading ? "Create Job Fields" : "Creating..."}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateJobFields;
