import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardHeader from "../../resusable/DashboardHeader";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import { Select } from "@mui/material";
import Table from "../../resusable/Table";
import DashboardMainContainer from "../../resusable/Dashboard-main-container";

const Applicants = () => {
  const applicants = [];
  return (
    <div>
      {/* you can add onchange method inside deashboard header */}
      <DashboardHeader title={"Applicants"} />
      <DashboardMainContainer>
        <div className="d-flex align-items-center gap-3">
          <div className="fw-medium fs-4">{applicants.length} Applicants</div>
          <select>
            <option>sort</option>
          </select>
        </div>
        <div>
          <Table applicants={applicants} isApplicant={true} />
        </div>
      </DashboardMainContainer>
      {/* Pagination */}
    </div>
  );
};

export default Applicants;
