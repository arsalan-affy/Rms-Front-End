import { useState } from "react";

const jobOptions = [
  {
    value: "recent-jobs",
    title: "Recent Jobs",
    description: "Jobs that were recently posted by recruiters.",
    numberOfJobs: 25,
    icon: "clock", // Icon name (can be used with libraries like React Icons)
    lastUpdated: "2024-11-25", // Last updated date
    location: "Global", // Indicates the location scope
    categories: ["IT", "Marketing", "Engineering"], // Example job categories
    isFeatured: true, // Boolean to highlight on the website
  },
  {
    value: "new-jobs",
    title: "New Jobs",
    description:
      "Freshly posted opportunities available for immediate application.",
    numberOfJobs: 40,
    icon: "plus-circle",
    lastUpdated: "2024-11-27",
    location: "Remote",
    categories: ["Finance", "Education", "Healthcare"],
    isFeatured: true,
  },
  {
    value: "active-jobs",
    title: "Active Jobs",
    description:
      "Currently active job listings that are still accepting applications.",
    numberOfJobs: 18,
    icon: "briefcase",
    lastUpdated: "2024-11-20",
    location: "USA",
    categories: ["Construction", "Design", "HR"],
    isFeatured: false,
  },
  {
    value: "total-jobs",
    title: "Total Jobs",
    description: "The total number of job listings available in the system.",
    numberOfJobs: 100,
    icon: "list",
    lastUpdated: "2024-11-27",
    location: "Global",
    categories: ["All Categories"],
    isFeatured: false,
  },
];

const DashboardDropdown = () => {
  const [selectJobs, setSelectJobs] = useState("");
  console.log(jobOptions[selectJobs]);

  return (
    <>
      <div className="col-md-5 col-12  p-md-4 px-2">
        <div className="fs-3 fw-bolder">Activity</div>
        <select
          onChange={(event) => {
            const value = event.target.value; //
            setSelectJobs(value);
            console.log(value);
          }}
          className="form-select"
          aria-label="Default select example"
        >
          <option selected>Open this select Jobs</option>
          <option value="0">Recent Jobs</option>
          <option value="1">New Jobs</option>
          <option value="2">Active Jobs</option>
          <option value="3">Total Jobs</option>
        </select>
        {/* {jobOptions[selectJobs]} */}
        <div className="mt-3 d-flex flex-column gap-2">
          <div className="fs-4 fw-semibold">
            Title:{jobOptions[selectJobs]?.title}
          </div>
          <div className="fs-5 fw-light">
            Description:{jobOptions[selectJobs]?.description}
          </div>
          <div className="fs-5 fw-light">
            Number of Jobs:{jobOptions[selectJobs]?.numberOfJobs}
          </div>
          <div className="fs-5 fw-light">
            Categories:
            {jobOptions[selectJobs]?.categories?.map((item, index) => {
              return (
                <div key={index} className="btn btn-outline-dark btn-sm me-2">
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardDropdown;
