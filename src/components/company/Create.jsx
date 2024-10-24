import { Button, Col, Row } from "react-bootstrap";
import { ReusableInput } from "../candidates/AddCandidates";
import { useState } from "react";
import { Hotel } from "lucide-react";
import Title from "../dashboard/Title";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/admin/create", formData);
      console.log(response);
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className=" d-flex justify-content-between flex-column "
      style={{ zIndex: 100 }}
    >
      <form onSubmit={handleSubmit}>
        <Title title={"Create Company"} icon={Hotel} />
        
        <div
          className=" d-flex flex-grow-1 px-5 flex-column"
          style={{ height: "100%" }}
        >
          <Row>
            <Col xs={12} className="mt-5">
              <Row>
                <Col>
                  <label className="mx-2 my-1 fs-5 fw-semibold">Name</label>
                  <ReusableInput
                    label="Designation"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    value={formData.name}
                    required
                  />
                  <label className="mx-2 my-1 fs-5 fw-semibold">
                    Company Name
                  </label>
                  <ReusableInput
                    label="Company Name"
                    name="companyName"
                    placeholder="Name of the Company"
                    onChange={handleChange}
                    value={formData.companyName}
                    required
                  />
                  <label className="mx-2 my-1 fs-5 fw-semibold">
                    Phone Number
                  </label>

                  <ReusableInput
                    label="Location"
                    name="phoneNumber"
                    placeholder="Enter your Phone Number"
                    onChange={handleChange}
                    value={formData.phoneNumber}
                    maxLength="10"
                    required
                  />
                  <label className="mx-2 my-1 fs-5 fw-semibold">
                    Email Number
                  </label>

                  <ReusableInput
                    label="Experience"
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    onChange={handleChange}
                    value={formData.email}
                    required
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="p-3  d-flex align-items-center justify-content-end gap-5">
          <span>Cancel</span>
          <Button
            type="submit"
            variant="warning"
            onClick={() => console.log(formData)}
          >
            {" "}
            Add Candidates
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Create;
