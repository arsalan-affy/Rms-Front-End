import React, { useState, useEffect } from "react";
import Title from "../../components/dashboard/Title";
import { User2, MoveLeft, Edit, File } from "lucide-react";
import { Button, Col, Row } from "react-bootstrap";
import { ReusableInput } from "../../components/candidates/AddCandidates";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { jwtDecode } from "jwt-decode";

const MyProfile = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [profileDetails, setProfileDetails] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decodedToken = jwtDecode(token);
    const role = decodedToken?.claims?.role;
    const id = decodedToken?.claims?.id;

    const fetchProfileData = async () => {
      try {
        let endpoint;
        if (role === "RECRUITMENT_MANAGER") {
          endpoint = `recruitment-manager/${id}`;
        } else if (role === "EMPLOYEE") {
          endpoint = `employee/${id}`;
        } else if (role === "ADMIN") {
          endpoint = `admin/${id}`;
        } else {
          throw new Error("Invalid role");
        }

        const response = await axios.get(endpoint);
        setProfileDetails(response.data.meta);
      } catch (error) {
        console.error("Error fetching profile data:", error.message);
      }
    };

    fetchProfileData();
  }, []);

  const handleEditName = async () => {
    const token = localStorage.getItem("token");
    const id = jwtDecode(token)?.claims?.id;

    try {
      setLoading(true);

      const response = await axios.put(
        `/employee/${id}`,
        { name: formData.name || profileDetails.name },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setProfileDetails((prev) => ({ ...prev, name: response.data.name }));
      setIsEditingName(false);
      console.log("Name updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating name:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div
      className="d-flex justify-content-between flex-column"
      style={{ zIndex: 100 }}
    >
      <Title title={"My Profile"} icon={User2} />

      <div
        className="d-flex flex-grow-1 px-5 flex-column"
        style={{ height: "100%" }}
      >
        <Row>
          <Col xs={12} className="mt-3">
            <Row>
              <div className="d-flex align-items-center gap-2 justify-content-between">
                <button
                  className="btn btn-outline-dark mx-2 btn-sm"
                  onClick={() => navigate(-1)}
                >
                  <MoveLeft />
                </button>
                {!isEditingName ? (
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setIsEditingName(true)}
                  >
                    <Edit />
                  </Button>
                ) : (
                  <Button
                    variant="success"
                    size="sm"
                    onClick={handleEditName}
                    disabled={loading}
                  >
                    {loading ? "Saving..." : "Save"}
                  </Button>
                )}
              </div>
              <Col>
                <div>
                  <div>
                    <label className="mx-2 my-1 fs-5 fw-semibold">Name</label>
                  </div>
                  <div className="align-items-center gap-2">
                    <ReusableInput
                      label="name"
                      name="name"
                      placeholder="Name"
                      onChange={handleChange}
                      value={
                        isEditingName
                          ? formData.name || profileDetails.name
                          : profileDetails.name
                      }
                      required
                      disabled={!isEditingName}
                    />
                  </div>
                </div>
                <div>
                  <label className="mx-2 my-1 fs-5 fw-semibold">Mobile</label>
                  <ReusableInput
                    label="mobile"
                    name="mobile"
                    placeholder="Mobile"
                    value={profileDetails.phoneNumber || ""}
                    disabled
                  />
                </div>
                <div>
                  <label className="mx-2 my-1 fs-5 fw-semibold">Email</label>
                  <ReusableInput
                    label="email"
                    name="email"
                    placeholder="Email"
                    value={profileDetails.email || ""}
                    disabled
                  />
                </div>
                <div>
                  <label className="mx-2 my-1 fs-5 fw-semibold">Position</label>
                  <ReusableInput
                    label="position"
                    name="position"
                    placeholder="Position"
                    value={
                      profileDetails.role === "RECRUITMENT_MANAGER"
                        ? "RECRUITMENT MANAGER"
                        : profileDetails.role
                    }
                    disabled
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MyProfile;
