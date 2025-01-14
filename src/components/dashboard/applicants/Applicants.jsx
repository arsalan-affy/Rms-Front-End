import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardHeader from "../../resusable/DashboardHeader";
import Table from "../../resusable/Table";
import DashboardMainContainer from "../../resusable/Dashboard-main-container";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { showToast } from "../../global/showToast";
import { useNavigate } from "react-router-dom";

const Applicants = () => {
  const [managers, setManagers] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userData = token && jwtDecode(token);
  const role = localStorage.getItem("role");

  const fetchApplicants = async () => {
    try {
      const response = await axios.get(
        `/job-applications/by-parent-id/${userData.claims.id}`
      );
      if (!response.error) {
        setManagers(() => response.data.meta);
      } else if (response.data.error) {
        showToast("error", response.data.message);
      }
    } catch (error) {
      if (error.status === 404) {
        console.log("No Applicants Found");
      } else {
        showToast(
          "error",
          error.response?.data?.message || "An error occurred"
        );
      }
    }
  };
  useEffect(() => {
    fetchApplicants();
  }, []);

  return (
    <div>
      {/* you can add onchange method inside deashboard header */}
      <DashboardHeader title={"Applicants"} />
      <DashboardMainContainer>
        <div className="d-flex align-items-center gap-3">
          <div className="fw-medium fs-4">{managers.length} Applicants</div>
          <select>
            <option>sort</option>
          </select>
        </div>
        <div>
          <Table applicants={managers} isApplicant={true} />
        </div>
      </DashboardMainContainer>
      {/* Pagination */}
    </div>
  );
};

export default Applicants;
