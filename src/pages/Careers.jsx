import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { MapPin, CalendarFold } from "lucide-react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Careers() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resume: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  useEffect(() => {
    axios
      .get("/job/by-approval?approval=PUBLISHED")
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true); // Disable the button and show spinner
    const formDataToSend = new FormData();
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("resume", formData.resume);
    formDataToSend.append("jobId", selectedJob?.id);

    try {
      const response = await axios.post(
        "/job-applications/apply",
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("Application submitted successfully:", response.data);
      toast.success("Application submitted successfully!");
      setFormData()
      setShowSuccess(true); // Show success alert
      setIsSubmitting(false); // Enable button
    } catch (error) {
      console.error("Error submitting application:", error);
      setIsSubmitting(false); // Enable button even if there's an error
    }
  };

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    const modal = new window.bootstrap.Modal(
      document.getElementById("jobModal")
    );
    modal.show();
  };

  return (
    <>
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <div className="container">
        <div className="row my-2">
          <div className="col-md-12 my-2 text-center">
            <h1>Careers</h1>
            <div className="careers d-flex justify-content-center">
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    All
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Full Time
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Part Time
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Remote
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-12 my-2">
            <div className="p-3">
              <div className="container">
                {jobs.map((item, index) => (
                  <div className="card my-3 p-3" key={item.id || index}>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h4 className="mb-0 text-capitalize">
                          {item?.jobTitle}
                        </h4>
                        <p className="f-15 mb-0 d-flex align-items-center">
                          <MapPin size={15} />
                          <span>{item?.jobLocation}</span>
                        </p>
                      </div>
                      <div>
                        <button
                          className="btn btn-primary w-100"
                          onClick={() => handleApplyClick(item)}
                        >
                          Apply
                        </button>
                        <p className="f-15 mb-0 d-flex align-items-center">
                          <CalendarFold size={15} />
                          <span>
                            {new Date(item.createdAt).toLocaleDateString()}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {/* <div
        className="modal fade"
        id="jobModal"
        tabIndex="-1"
        aria-labelledby="jobModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg careers-job-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="jobModalLabel">
                {selectedJob?.jobTitle}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                <strong>Job Title:</strong> {selectedJob?.jobTitle}
              </p>
              <p>
                <strong>Posted On:</strong>{" "}
                {new Date(selectedJob?.createdAt).toLocaleDateString()}
              </p>
              <p>
                <strong>Location:</strong> {selectedJob?.jobLocation}
              </p>
              <p>
                <strong>Description:</strong>
                <div
                  dangerouslySetInnerHTML={{
                    __html: selectedJob?.jobDescription,
                  }}
                ></div>
              </p>
              <p>
                <strong>Qualification:</strong>
                <div
                  dangerouslySetInnerHTML={{
                    __html: selectedJob?.jobQualification,
                  }}
                ></div>
              </p>
              <p>
                <strong>Additional Information:</strong>
                <div
                  dangerouslySetInnerHTML={{
                    __html: selectedJob?.jobAdditionalInformation,
                  }}
                ></div>
              </p>
              <p>
                <strong>Company Description:</strong>
                <div
                  dangerouslySetInnerHTML={{
                    __html: selectedJob?.companyDescription,
                  }}
                ></div>
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Submit Application
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div
        className="modal fade"
        id="jobModal"
        tabIndex="-1"
        aria-labelledby="jobModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl careers-job-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="jobModalLabel">
                {selectedJob?.jobTitle}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <div className="p-3 card">
                      <h3>{selectedJob?.jobTitle}</h3>
                      <p>
                        <strong>Posted On:</strong>{" "}
                        {new Date(selectedJob?.createdAt).toLocaleDateString()}
                      </p>
                      <p>
                        <strong>Location:</strong> {selectedJob?.jobLocation}
                      </p>
                      <p>
                        <strong>Description:</strong>
                      </p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: selectedJob?.jobDescription,
                        }}
                      ></div>
                      <p>
                        <strong>Qualification:</strong>
                      </p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: selectedJob?.jobQualification,
                        }}
                      ></div>
                      <p>
                        <strong>Additional Information:</strong>
                      </p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: selectedJob?.jobAdditionalInformation,
                        }}
                      ></div>
                      <p>
                        <strong>Company Description:</strong>
                      </p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: selectedJob?.companyDescription,
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <form className="card p-3">
                      <div>
                        <div className="mb-3">
                          <label className="form-label">First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="Enter First Name"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Enter Last Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter Email"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Mobile</label>
                        <input
                          type="tel"
                          className="form-control"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter Mobile"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Resume/CV</label>
                        <input
                          type="file"
                          className="form-control"
                          name="resume"
                          onChange={handleFileChange}
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary my-3 w-100"
                        onClick={handleSubmit}
                        disabled={isSubmitting} // Disables button when submitting
                      >
                        {isSubmitting ? (
                          <span
                            className="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>
                        ) : (
                          "Submit Application"
                        )}
                      </button>
                    </form>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}