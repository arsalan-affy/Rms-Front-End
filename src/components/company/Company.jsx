import { BaggageClaim } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Title from "../dashboard/Title";
import DashboardInput from "../dashboard/DashboardInput";
import { useEffect, useState } from "react";
import axios from "axios";

const Company = () => {
  const [companies, setCompanies] = useState([]);
  const navigate = useNavigate();
  const fetchCompanies = async () => {
    try {
      const response = await axios.get("/admin/all");
      console.log(response.data);
      setCompanies(() => response.data);
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
            className="btn btn-outline-dark"
            onClick={() => navigate("create")}
          >
            Create Company
          </button>
        </div>
      </div>
      <JobTable jobs={companies} />
    </div>
  );
};
export function JobTable({ jobs = [] }) {
  const navigate = useNavigate();
  // Job data array

  return (
    <div className="">
      <table className="table table-striped table-hover border">
        <thead className="table-light">
          <tr>
            <th scope="col">name</th>
            <th scope="col">companyName</th>
            <th scope="col">email</th>
            <th scope="col">phoneNumber</th>
            <th scope="col">username</th>
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
              <td>{job?.companyName}</td>
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

export default Company;
