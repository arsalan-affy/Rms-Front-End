import { FileUser, SquareKanban } from "lucide-react";
import Title from "../dashboard/Title";
import DashboardInput from "../dashboard/DashboardInput";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const Candidates = () => {
  const [managers, setManagers] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userData = token && jwtDecode(token);
  const role = localStorage.getItem("role");
  const fetchCompanies = async () => {
    console.log(111);
    try {
      const response = await axios.get("/job-applications/all");
      console.log(response.data);
      setManagers(() => response.data);
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
    fetchCompanies();
  }, []);
  return (
    <div className="me-md-3">
      <div>
        <Title icon={FileUser} title={"Applicants"} />
      </div>
      <div className="w-75 mx-auto mt-4">
        <DashboardInput />
      </div>
      <div className="d-flex gap-4 w-100">
        <div className="my-md-4">
          <div className="row">
            <div className="col">
              <select className="form-select rounded-3">
                <option>Job Shows</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
            <div className="col">
              <select className="form-select rounded-3">
                <option>Department</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
            <div className="col">
              <select className="form-select rounded-3">
                <option>Location</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
          </div>
        </div>
        {/* <div className="d-flex align-items-center justify-content-center">
          <button
            className="btn btn-primary btn-theme"
            onClick={() => navigate("create")}
          >
            Create Candidates
          </button>
        </div> */}
      </div>
      <JobTable jobs={managers} />
    </div>
  );
};

export function JobTable({ jobs = [] }) {
  const navigate = useNavigate();
  // Job data array

  return (
    <div className="">
      <table className="table table-striped table-hover border text-center">
        <thead className="table-light">
          <tr>
            <th scope="col">S No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Resume/CV</th>
          </tr>
        </thead>
        <tbody>
          {jobs?.map((job, index) => (
            <tr key={index} className="cursor-pointer">
              <td>{index + 1}</td>
              <td>{job?.candidateName}</td>
              <td>{job?.email}</td>
              <td>{job?.phone}</td>
              <td>
                <a
                  className="btn btn-primary"
                  href={job?.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume/CV
                </a>
              </td>
            </tr>
          ))}

          {jobs?.length === 0 ? (
            <tr>  
              <td colSpan={5}>No Applicants Found</td>
            </tr>
          ) : (
            ""
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Candidates;
