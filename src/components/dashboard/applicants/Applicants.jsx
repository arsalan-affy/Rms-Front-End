import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardHeader from "../../resusable/DashboardHeader";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import { Select } from "@mui/material";
import Table from "../../resusable/Table";
import DashboardMainContainer from "../../resusable/Dashboard-main-container";

const Applicants = () => {
  // Sample array of objects for the table data
  const applicants = [
    {
      id: "00001",
      name: "Christine Brooks",
      email: "chris@gmail.com",
      date: "04 Sep 2019",
      job: "UI/UX Designer",
    },
    {
      id: "00002",
      name: "Rosie Pearson",
      email: "rosie@gmail.com",
      date: "28 May 2023",
      job: "Frontend",
    },
    {
      id: "00003",
      name: "Darrell Caldwell",
      email: "darr@gmail.com",
      date: "23 Nov 2019",
      job: "Backend",
    },
    {
      id: "00004",
      name: "Gilbert Johnston",
      email: "gillie@gmail.com",
      date: "05 Feb 2019",
      job: "Project Manager",
    },
    {
      id: "00005",
      name: "Alan Cain",
      email: "alan@gmail.com",
      date: "29 Jul 2019",
      job: "CSA",
    },
    {
      id: "00006",
      name: "Alfred Murray",
      email: "alfred@gmail.com",
      date: "15 Aug 2019",
      job: "Manager",
    },
    {
      id: "00007",
      name: "Maggie Sullivan",
      email: "maggie@gmail.com",
      date: "21 Dec 2019",
      job: "SAP Consultant",
    },
    {
      id: "00008",
      name: "Rosie Todd",
      email: "rosie.todd@gmail.com",
      date: "30 Apr 2019",
      job: "Graphic Designer",
    },
    {
      id: "00009",
      name: "Dollie Hines",
      email: "dollie@gmail.com",
      date: "09 Jan 2019",
      job: "UI/UX",
    },
    {
      id: "00010",
      name: "Dollie Hines",
      email: "dollie@gmail.com",
      date: "09 Jan 2019",
      job: "UI/UX",
    },
    {
      id: "00010",
      name: "Dollie Hines",
      email: "dollie@gmail.com",
      date: "09 Jan 2019",
      job: "UI/UX",
    },
    {
      id: "00010",
      name: "Dollie Hines",
      email: "dollie@gmail.com",
      date: "09 Jan 2019",
      job: "UI/UX",
    },
    {
      id: "00010",
      name: "Dollie Hines",
      email: "dollie@gmail.com",
      date: "09 Jan 2019",
      job: "UI/UX",
    },
    {
      id: "00010",
      name: "Dollie Hines",
      email: "dollie@gmail.com",
      date: "09 Jan 2019",
      job: "UI/UX",
    },
    // Add more items as needed...
  ];

  // Pagination logic

  return (
    <div className="">
      {/* you can add onchange method inside deashboard header */}
      <DashboardHeader title={"Applicants"} />
      <DashboardMainContainer>
        <div className="d-flex align-items-center gap-3">
          <div className="fw-medium" style={{ fontSize: "28px" }}>
            {applicants.length} Applicants
          </div>
          <select>
            <option>sort</option>
          </select>
        </div>
        <div className="mt-2">
          <Table applicants={applicants} isApplicant={true} />
        </div>
      </DashboardMainContainer>
      {/* Pagination */}
    </div>
  );
};

export default Applicants;
