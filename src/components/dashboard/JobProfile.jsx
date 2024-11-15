import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ArrowLeft, BaggageClaimIcon } from "lucide-react";
import { Button, Table } from "react-bootstrap";
import Title from "./Title";
import DashboardInput from "./DashboardInput";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showToast } from "../global/showToast";
import { formatDateTime } from "../global/formatDateTime";

export function JobProfile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [jobDetail, setJobDetail] = useState("");
  const [jobApplicant, setJobApplicant] = useState([]);
  const [time, setTime] = useState("-");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await axios.get(`/job/${id}`);
        console.log(response.data);
        if (!response.data.error) {
          const timeParse = formatDateTime(response.data.meta.createdAt);

          setTime(timeParse);
          setJobDetail(response.data.meta);
          setStatus(response.data.meta.jobApproval);
        } else if (response.data.error) {
          showToast("error", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchJobData();

    const fetchJobApplicant = async () => {
      try {
        const response = await axios.get(`/job-applications/by-jobId/${id}`);
        if (!response.data.error) {
          setJobApplicant(response.data.meta);
        } else if (response.data.error) {
          showToast("warn", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching job applicants:", error);
      }
    };

    fetchJobApplicant();
  }, [id]);

  const changeJobStatus = async (newStatus) => {
    try {
      const response = await axios.patch(
        `/recruitment-manager/${id}/approval?jobApproval=${newStatus}`
      );

      if (!response.data.error) {
        showToast("success", `Job ${newStatus}`);
        setStatus(newStatus);
      } else if (response.data.error) {
        showToast("warn", response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="me-md-2">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      {/* Profile Header */}
      <Title icon={BaggageClaimIcon} title={"Job-profile"} />
      <div
        className="d-flex justify-content-between align-items-start align-items-md-center p-3 flex-sm-row flex-column rounded border mt-3 mx-2"
        style={{
          background: "linear-gradient(to bottom right, #B9C0FF, #fff)",
        }}
      >
        <div className="d-flex align-items-start gap-4 justify-content-center ">
          <ArrowLeft onClick={() => navigate(-1)} className="cursor-pointer" />
          <div>
            <h4>
              {jobDetail?.jobTitle} <span> #{jobDetail?.jobCode}</span>
            </h4>
            <p className="mb-0">Hiring Manager: {jobDetail?.createdBy?.name}</p>
            <p className="mb-0">
              Recruiter: {jobDetail?.recruiterAssigned?.name}
            </p>
            <p className="mb-0">{jobDetail?.jobLocation}</p>
            <p className="text-muted mb-0">Current Status: {status || "-"}</p>
            <p className="text-muted mb-0">{time}</p>
          </div>
        </div>
        <div>
          <Button
            variant={
              status === "PUBLISHED"
                ? "danger"
                : status === "APPROVED" || status === "UNPUBLISHED"
                ? "outline-dark"
                : "success"
            }
            className="me-2 btn-sm"
            onClick={() => {
              if (status === "PENDING") {
                changeJobStatus("APPROVED"); // Approve
              } else if (status === "PUBLISHED") {
                changeJobStatus("UNPUBLISHED"); // Unpublish
              } else if (status === "APPROVED" || status === "UNPUBLISHED") {
                changeJobStatus("PUBLISHED"); // Publish
              }
            }}
          >
            {status === "PENDING"
              ? "Approve"
              : status === "PUBLISHED"
              ? "Unpublish"
              : "Publish"}
          </Button>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="mt-4 p-3 bg-white rounded border mx-2">
        <div className="d-flex align-items-md-center gap-2 justify-content-between flex-column flex-sm-row">
          <div className="text-primary fs-4 fw-bolder text-center text-sm-start d-flex align-items-center justify-content-center">
            Applicants
          </div>
          <div className="w-75">
            <DashboardInput />
          </div>
        </div>
      </div>

      {/* Applicants Table */}
      <div className="mt-4 text-center mx-2">
        <Table striped bordered hover>
          <thead className="table-light">
            <tr>
              <th>Applicant</th>
              <th>Company</th>
              <th>Location</th>
              <th>Status</th>
              <th>Application Date</th>
            </tr>
          </thead>
          <tbody>
            {jobApplicant?.map((data, index) => (
              <tr
                key={index}
                className="cursor-pointer"
                onClick={() => navigate("job-applicants/" + data?.id)}
              >
                <td>{data?.candidateName || "-"}</td>
                <td>{data?.company || "-"}</td>
                <td>{data?.location || "-"}</td>
                <td>{data?.status || "-"}</td>
                <td>{formatDateTime(data?.appliedAt) || "-"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
