import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ArrowLeft, BaggageClaimIcon } from "lucide-react";
import { Button, Table } from "react-bootstrap";
import Title from "./Title";
import DashboardInput from "./DashboardInput";

export function JobProfile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [jobDetail, setJobDetail] = useState("");
  const [jobApplicant, setJobApplicant] = useState([])

  useEffect(() => {
    // Fetch job data using the ID from the URL
    const fetchJobData = async () => {
      try {
        const response = await axios.get(`/job/${id}`);
        
        console.log(response);
        setJobDetail(response.data);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchJobData();

    const fetchJobApplicant = async () => {
      try {
        const response = await axios.get(`/job-applications/by-jobId/${id}`);
        
        console.log(response);
        setJobApplicant(response.data)
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchJobApplicant()
  }, [id]);

  

  return (
    <div className="me-md-2">
      {/* Profile Header */}
      <Title icon={BaggageClaimIcon} title={"Job-profile"} />
      <div
        className="d-flex justify-content-between align-items-start align-items-md-center p-3 flex-sm-row flex-column rounded border mt-3"
        style={{
          background: "linear-gradient(to bottom right, #B9C0FF, #fff)", // Gradient from top left to bottom right
        }}
      >
        <div className="d-flex align-items-start gap-4 justify-content-center">
          <ArrowLeft onClick={() => navigate(-1)} className="cursor-pointer" />
          <div>
            <h4>{jobDetail?.jobTitle}</h4>
            <p className="mb-0">Created By: {jobDetail?.createdBy?.name}</p>
            <p className="mb-0">{jobDetail?.jobLocation}</p>
            <p className="text-muted mb-0">{jobDetail?.jobApproval}</p>
            <p className="text-muted mb-0">{jobDetail?.createdAt}</p>
          </div>
        </div>
        <div>
          <Button variant="outline-dark" className="me-2 btn-sm font-black">
            Add Candidate
          </Button>
          <Button variant="outline-dark" className="btn-sm ">
            Publish
          </Button>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="mt-4 p-3 bg-white rounded border">
        <div className="d-flex align-items-md-center gap-2 justify-content-between flex-column flex-sm-row">
          <div className="text-primary fs-4 fw-bolder text-center text-sm-start">
            Applicants
          </div>
          <div className="w-75">
            <DashboardInput />
          </div>
        </div>
      </div>

      {/* Applicants Table */}
      <div className="mt-4 text-center">
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
                <td>{data?.candidateName  || "-"}</td>
                <td>{data?.company || "-"}</td>
                <td>{data?.location || "-"}</td>
                <td>{data?.status || "-"}</td>
                <td>{data?.appliedAt  || "-"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
