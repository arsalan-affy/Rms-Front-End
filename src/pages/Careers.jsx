import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { MapPin, CalendarFold } from "lucide-react";
import axios from "axios";

export default function Careers() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

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
      <div
        className="modal fade"
        id="jobModal"
        tabIndex="-1"
        aria-labelledby="jobModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
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
                <strong>Location:</strong> {selectedJob?.jobLocation}
              </p>
              <p>
                <strong>Description:</strong> {selectedJob?.jobDescription}
              </p>
              <p>
                <strong>Qualification:</strong> {selectedJob?.jobQualification}
              </p>
              <p>
                <strong>Additional Information:</strong>{" "}
                {selectedJob?.jobAdditionalInformation}
              </p>
              <p>
                <strong>Company Description:</strong>{" "}
                {selectedJob?.companyDescription}
              </p>
              <p>
                <strong>Posted By:</strong> {selectedJob?.createdBy?.name} (
                {selectedJob?.createdBy?.email})
              </p>
              <p>
                <strong>Posted On:</strong>{" "}
                {new Date(selectedJob?.createdAt).toLocaleDateString()}
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
      </div>
    </>
  );
}
