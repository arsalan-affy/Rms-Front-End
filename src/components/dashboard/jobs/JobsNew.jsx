import { Filter, Grid, List } from "lucide-react";
import React, { useMemo, useState } from "react";
import DashboardHeader from "../../resusable/DashboardHeader";
import DashboardMainContainer from "../../resusable/Dashboard-main-container";
import Table from "../../resusable/Table";
import GridJobs from "./GridJobs";

const jobDetails = [
  {
    jobCode: "JC101",
    position: "Software Developer",
    date: "2024-06-01",
    lastDate: "2024-06-15",
    location: "New Delhi",
    employment: "Full-Time",
  },
  {
    jobCode: "JC102",
    position: "Project Manager",
    date: "2024-06-03",
    lastDate: "2024-06-20",
    location: "Bangalore",
    employment: "Contract",
  },
  {
    jobCode: "JC103",
    position: "UI/UX Designer",
    date: "2024-06-05",
    lastDate: "2024-06-25",
    location: "Mumbai",
    employment: "Part-Time",
  },
  {
    jobCode: "JC104",
    position: "Data Analyst",
    date: "2024-06-07",
    lastDate: "2024-06-30",
    location: "Hyderabad",
    employment: "Internship",
  },
  {
    jobCode: "JC105",
    position: "HR Coordinator",
    date: "2024-06-10",
    lastDate: "2024-07-05",
    location: "Chennai",
    employment: "Full-Time",
  },
  {
    jobCode: "JC105",
    position: "HR Coordinator",
    date: "2024-06-10",
    lastDate: "2024-07-05",
    location: "Chennai",
    employment: "Full-Time",
  },
  {
    jobCode: "JC105",
    position: "HR Coordinator",
    date: "2024-06-10",
    lastDate: "2024-07-05",
    location: "Chennai",
    employment: "Full-Time",
  },
  {
    jobCode: "JC105",
    position: "HR Coordinator",
    date: "2024-06-10",
    lastDate: "2024-07-05",
    location: "Chennai",
    employment: "Full-Time",
  },
  {
    jobCode: "JC105",
    position: "HR Coordinator",
    date: "2024-06-10",
    lastDate: "2024-07-05",
    location: "Chennai",
    employment: "Full-Time",
  },
  {
    jobCode: "JC105",
    position: "HR Coordinator",
    date: "2024-06-10",
    lastDate: "2024-07-05",
    location: "Chennai",
    employment: "Full-Time",
  },
  {
    jobCode: "JC105",
    position: "HR Coordinator",
    date: "2024-06-10",
    lastDate: "2024-07-05",
    location: "Chennai",
    employment: "Full-Time",
  },
];
const jobListings = [
  {
    id: 1,
    title: "Backend Developer",
    description:
      "Join our team as an Email Marketing Specialist and lead our digital outreach efforts.",
    tags: ["FULL TIME", "REMOTE", "DEVELOPMENT"],
    applyBefore: "30th December",
    location: "London, United Kingdom",
    detailsLink: "More Details",
  },
  {
    id: 2,
    title: "Frontend Developer",
    description:
      "Join our team as an Email Marketing Specialist and lead our digital outreach efforts.",
    tags: ["FULL TIME", "REMOTE", "DEVELOPMENT"],
    applyBefore: "30th December",
    location: "London, United Kingdom",
    detailsLink: "More Details",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    description:
      "Join our team as an Email Marketing Specialist and lead our digital outreach efforts.",
    tags: ["FULL TIME", "REMOTE", "DEVELOPMENT"],
    applyBefore: "30th December",
    location: "London, United Kingdom",
    detailsLink: "More Details",
  },
  {
    id: 4,
    title: "Backend Developer",
    description:
      "Join our team as an Email Marketing Specialist and lead our digital outreach efforts.",
    tags: ["FULL TIME", "REMOTE", "DEVELOPMENT"],
    applyBefore: "30th December",
    location: "London, United Kingdom",
    detailsLink: "More Details",
  },
  {
    id: 5,
    title: "Frontend Developer",
    description:
      "Join our team as an Email Marketing Specialist and lead our digital outreach efforts.",
    tags: ["FULL TIME", "REMOTE", "DEVELOPMENT"],
    applyBefore: "30th December",
    location: "London, United Kingdom",
    detailsLink: "More Details",
  },
  {
    id: 6,
    title: "UI/UX Designer",
    description:
      "Join our team as an Email Marketing Specialist and lead our digital outreach efforts.",
    tags: ["FULL TIME", "REMOTE", "DEVELOPMENT"],
    applyBefore: "30th December",
    location: "London, United Kingdom",
    detailsLink: "More Details",
  },
  {
    id: 7,
    title: "Backend Developer",
    description:
      "Join our team as an Email Marketing Specialist and lead our digital outreach efforts.",
    tags: ["FULL TIME", "REMOTE", "DEVELOPMENT"],
    applyBefore: "30th December",
    location: "London, United Kingdom",
    detailsLink: "More Details",
  },
  {
    id: 8,
    title: "Frontend Developer",
    description:
      "Join our team as an Email Marketing Specialist and lead our digital outreach efforts.",
    tags: ["FULL TIME", "REMOTE", "DEVELOPMENT"],
    applyBefore: "30th December",
    location: "London, United Kingdom",
    detailsLink: "More Details",
  },
  {
    id: 9,
    title: "UI/UX Designer",
    description:
      "Join our team as an Email Marketing Specialist and lead our digital outreach efforts.",
    tags: ["FULL TIME", "REMOTE", "DEVELOPMENT"],
    applyBefore: "30th December",
    location: "London, United Kingdom",
    detailsLink: "More Details",
  },
];
const JobsNew = () => {
  const [isGrid, setIsGridView] = useState(
    JSON.parse(localStorage.getItem("isGrid")) || false
  );

  console.log("isGrid", localStorage.getItem("isGrid"));

  const handleSetIsGridView = () => {
    localStorage.setItem("isGrid", JSON.stringify(!isGrid));
    setIsGridView((prev) => {
      return !prev;
    });
  };

  return (
    <div>
      <DashboardHeader title={"Jobs"} />
      <DashboardMainContainer className={""}>
        <div className="d-flex align-items-center justify-content-between px-3">
          <div className="d-flex gap-3 align-items-center ">
            <div className="fw-medium" style={{ fontSize: "28px" }}>
              {jobDetails?.length} active Jobs
            </div>{" "}
            <button className="btn btn-outline-dark border">
              filter <Filter size={18} />
            </button>
            <button
              onClick={handleSetIsGridView}
              className="btn btn-outline-dark border"
            >
              {isGrid ? <Grid size={18} /> : <List size={18} />}
            </button>
          </div>
          <div className="btn btn-primary border-0">Create Jobs</div>
        </div>
        <div className="mt-3">
          {isGrid ? (
            <Table applicants={jobDetails} />
          ) : (
            <>
              <GridJobs data={jobListings} />
            </>
          )}
        </div>
      </DashboardMainContainer>
    </div>
  );
};

export default JobsNew;
