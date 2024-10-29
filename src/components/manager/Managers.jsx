import { SquareKanban } from "lucide-react";
import Title from "../dashboard/Title";
import DashboardInput from "../dashboard/DashboardInput";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const Managers = () => {
  const [managers, setManagers] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userData = token && jwtDecode(token);
  const fetchCompanies = async () => {
    try {
      const response = await axios.get(
        "/recruitment-manager/parent/" + userData?.claims?.id
      );
      console.log(response.data);
      setManagers(() => response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchCompanies();
  }, []);
  return (
    <div className="me-md-3">
      <div>
        <Title icon={SquareKanban} title={"Manager"} />
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
        <div className="d-flex align-items-center justify-content-center">
          <button
            className="btn btn-outline-dark"
            onClick={() => navigate("create")}
          >
            Create Managers
          </button>
        </div>
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
            <th scope="col">Name</th>
            <th scope="col">Company Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Username</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the jobs array */}
          {jobs?.map((job, index) => (
            <tr
              key={index}
              className="cursor-pointer"
              //   onClick={() => navigate("job-profile/" + job?.title)}
            >
              <td>{job?.name}</td>
              <td>{job?.parent.companyName}</td>
              <td>{job?.email}</td>
              <td>{job?.phoneNumber}</td>
              <td>{job?.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Managers;
