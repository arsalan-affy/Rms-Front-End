import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BaggageClaim } from "lucide-react";
import Handbag from "../../../assets/icons/Handbag";
import JobSummaryChart from "./JobsCharts";

const NewJobs = () => {
  const jobs = [
    {
      title: "Frontend Developer",
      level: "Senior Level",
    },
    {
      title: "UI/UX Designer",
      level: "Senior Level",
    },
    {
      title: "Backend Developer",
      level: "Fresher",
    },
  ];

  return (
    <div className="d-flex row border-1">
      {/* New Jobs Section */}
      <div className="col-md-6">
        <div className="card shadow-main border-1 ">
          <div
            className="card-header p-2  border-0 d-flex justify-content-between align-items-center"
            style={{ background: "#FCFCFC" }}
          >
            <h5 className="mb-0">New Jobs</h5>
            <div href="#view-all" className="text-primary cursor-pointer">
              View all jobs
            </div>
          </div>
          <div className="card-body p-2">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="d-flex justify-content-between rounded-2 bg-white align-items-center  p-2 mb-1"
              >
              <div className="d-flex align-items-center justify-content-between  gap-5">
                <Handbag />
                <div>
                  <h6 className="mb-1 fw-semibold">{job.title}</h6>
                  <small className="text-muted">{job.level}</small>
                </div>
              </div>
                <div>
                  <button
                    className="btn text-white btn-sm"
                    style={{ background: "#6998FF" }}
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-6 ">
        <JobSummaryChart />
      </div>
    </div>
  );
};

export default NewJobs;
