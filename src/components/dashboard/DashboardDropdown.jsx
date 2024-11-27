import { useState } from "react";

const jobs = [
  {
    id: 1,
    title: "Software Developer",
    status: "Active",
    lastUpdated: "2024-11-27",
  },
  {
    id: 2,
    title: "React Developer",
    status: "Active",
    lastUpdated: "2024-11-26",
  },
  { id: 3, title: "Sr Analyst", status: "Active", lastUpdated: "2024-11-25" },
  {
    id: 4,
    title: "Frontend Engineer",
    status: "Inactive",
    lastUpdated: "2024-11-24",
  },
  {
    id: 5,
    title: "Backend Developer",
    status: "Active",
    lastUpdated: "2024-11-23",
  },
  {
    id: 6,
    title: "Full Stack Developer",
    status: "Inactive",
    lastUpdated: "2024-11-22",
  },
  { id: 7, title: "Tech Lead", status: "Active", lastUpdated: "2024-11-21" },
  {
    id: 8,
    title: "Data Scientist",
    status: "Active",
    lastUpdated: "2024-11-20",
  },
  {
    id: 9,
    title: "ML Engineer",
    status: "Inactive",
    lastUpdated: "2024-11-19",
  },
  { id: 10, title: "QA Engineer", status: "Active", lastUpdated: "2024-11-18" },
  {
    id: 11,
    title: "UI/UX Designer",
    status: "Active",
    lastUpdated: "2024-11-17",
  },
  {
    id: 12,
    title: "Database Administrator",
    status: "Inactive",
    lastUpdated: "2024-11-16",
  },
  {
    id: 13,
    title: "DevOps Engineer",
    status: "Active",
    lastUpdated: "2024-11-15",
  },
  {
    id: 14,
    title: "Cloud Architect",
    status: "Active",
    lastUpdated: "2024-11-14",
  },
  {
    id: 15,
    title: "Cybersecurity Analyst",
    status: "Active",
    lastUpdated: "2024-11-13",
  },
];

const DashboardDropdown = () => {
  const [selectedOption, setSelectedOption] = useState("0");

  // Filters for dropdown options
  const filteredJobs =
    selectedOption === "1"
      ? jobs.filter((job) => job.status === "Active").slice(0, 5) // New Jobs: Latest 5 Active
      : selectedOption === "2"
      ? jobs.filter((job) => job.status === "Active") // Active Jobs: All Active
      : jobs; // All Jobs: All jobs

  return (
    <div className="col-md-5 col-12 p-md-4 px-2">
      <div className="fs-3 fw-bolder">Jobs</div>
      <select
        onChange={(event) => setSelectedOption(event.target.value)}
        className="form-select"
        aria-label="Default select example"
      >
        <option value="0" selected>
          All Jobs
        </option>
        <option value="1">New Jobs</option>
        <option value="2">Active Jobs</option>
      </select>

      <div className="mt-3 d-flex flex-column gap-2 jobs-dashboard-container">
        {filteredJobs.map((job) => (
          <div key={job.id} className="job-item">
            <div className="fs-5 fw-semibold">{job.title}</div>
            <div className="fs-8 fw-light">
              {job.lastUpdated}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardDropdown;
