import { BaggageClaim } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Title from "../dashboard/Title";
import DashboardInput from "../dashboard/DashboardInput";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { showToast } from "../global/showToast";

const Company = () => {
  const [companies, setCompanies] = useState([]);
  const navigate = useNavigate();

  const fetchCompanies = async () => {
    try {
      const response = await axios.get("/company/all");
      console.log(response.data);
      if (response.data.error === "false") {
        setCompanies(response.data.meta);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Error fetching companies");
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <div className="me-md-3">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <div>
        <Title icon={BaggageClaim} title={"Company"} />
      </div>
      <div className="w-75 mx-auto mt-4">
        <DashboardInput />
      </div>
      <div className="d-flex gap-4 w-100">
        <div className="my-md-4 my-3 mx-2 mx-md-0">
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
        <div className="d-flex align-items-center justify-content-center">
          <button
            className="btn btn-primary btn-theme"
            onClick={() => navigate("create")}
          >
            Create Company
          </button>
        </div>
      </div>
      <JobTable jobs={companies} fetchCompanies={fetchCompanies} />
    </div>
  );
};

export function JobTable({ jobs = [], fetchCompanies }) {
  const navigate = useNavigate();

  const handleStatusToggle = async (id) => {
    try {
      const response = await axios.put(`/admin/soft-delete/${id}`);
      if (response.data.error === "false") {
        showToast("success",response.data.message);
        fetchCompanies(); // Refresh company data after status update
      } else {
        showToast("error",response.data.message);
      }
    } catch (error) {
      console.error("Failed to update job status:", error);
      showToast("error","Failed to update job status.");
    } 
  };

  return (
    <div>
      <table className="table table-striped table-hover border">
        <thead className="table-light">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Company Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Username</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {jobs?.map((job, index) => (
            <tr key={index} className="cursor-pointer">
              <td>{job?.name}</td>
              <td>{job?.companyName}</td>
              <td>{job?.email}</td>
              <td>{job?.phoneNumber}</td>
              <td>{job?.username}</td>
              <td>
                <Toggle
                  checked={!job?.deleted}
                  icons={false}
                  onChange={() => handleStatusToggle(job?.id)}
                  aria-label="Toggle job status"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Company;
