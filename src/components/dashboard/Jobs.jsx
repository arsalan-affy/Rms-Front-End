/* eslint-disable react/prop-types */
import { BaggageClaim } from "lucide-react";
import Title from "./Title";
import DashboardInput from "./DashboardInput";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { toast, ToastContainer } from "react-toastify";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  const getJobs = async () => {
    const decodedToken = jwtDecode(token);
    const id = decodedToken.claims.id;
    const role = decodedToken.claims.role;
    console.log(id);

    try {
      setLoading(true);

      // Use a different API for ADMIN role
      const endpoint =
        role === "ADMIN"
          ? `/job/byParent/${id}`
          : `/job/jobs/by-recruiter-or-creator/${id}`;

      const response = await axios.get(endpoint);
      const meta = response.data;
      console.log(meta);

      if (meta.error === "false") {
        setJobs(meta.meta);
        setError(null);
      } else {
        setJobs([]);
        setError(meta.message);
        toast.error(meta.message);
      }
    } catch (err) {
      console.log("Error fetching jobs:", err);
      setError("Failed to fetch jobs. Please try again later.");
      toast.error(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);
  const navigate = useNavigate();
  return (
    <div className="me-md-3">
      <ToastContainer />
      <div>
        <Title icon={BaggageClaim} title={"Jobs"} />
      </div>
      <div className="w-75 mx-auto mt-4">
        <DashboardInput />
      </div>
      <div className="d-flex gap-4 w-100  mt-md-0 ">
        <div className="my-3 mx-2">
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
            <div className="col">
              <select className="form-select rounded-3">
                <option>Job Status</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
            <div className="col d-none d-md-block">
              <select className="form-select rounded-3">
                <option>Hiring Manager</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <button
            className="btn  btn-outline-dark"
            onClick={() => navigate("create-jobs")}
          >
            Create Jobs
          </button>
        </div>
      </div>
      <JobTable jobs={jobs} />
    </div>
  );
};
export function JobTable({ jobs = [] }) {
  const navigate = useNavigate();
  // Job data array

  return (
    <div className="">
      <table className="table table-striped table-hover border text-center ">
        <thead className="table-light ">
          <tr>
            <th scope="col">S No.</th>
            <th scope="col">Title</th>
            <th scope="col">Recruiter</th>
            <th scope="col">Hiring Manager</th>
            <th scope="col">New</th>
            <th scope="col">In-review</th>
            <th scope="col">Interview</th>
            <th scope="col">Offered</th>
            <th scope="col">Hired</th>

            {/* <th scope="col">Job Description</th>
            <th scope="col">Job Location</th>
            <th scope="col">Company Description</th>
            <th scope="col">Job Qualification</th>
            <th scope="col">Job Additional Information</th> */}
          </tr>
        </thead>
        <tbody className="jobs-table">
          {jobs && jobs.length > 0 ? (
            jobs.map((job, index) => (
              <tr
                key={index}
                className="cursor-pointer"
                onClick={() => navigate("job-profile/" + job?.id)}
              >
                <td>{index + 1}</td>
                <td className="text-capitalize">{job?.jobTitle}</td>
                <td className="text-capitalize">
                  {job?.recruiterAssigned?.name}
                </td>
                <td className="text-capitalize">{job?.createdBy?.name}</td>
                <td className="text-capitalize">
                  <div className="card p-2">
                    {job?.pending ? job?.pending : "-"}
                  </div>
                </td>
                <td className="text-capitalize">
                  <div className="card p-2">
                    {job?.review ? job?.review : "-"}
                  </div>
                </td>
                <td className="text-capitalize">
                  <div className="card p-2">
                    {job?.interview ? job?.interview : "-"}
                  </div>
                </td>
                <td className="text-capitalize">
                  <div className="card p-2">
                    {job?.offered ? job?.offered : "-"}
                  </div>
                </td>
                <td className="text-capitalize">
                  <div className="card p-2">
                    {job?.hired ? job?.hired : "-"}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="text-center">
                No jobs found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Jobs;
