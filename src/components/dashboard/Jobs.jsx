/* eslint-disable react/prop-types */
import { BaggageClaim } from "lucide-react";
import Title from "./Title";
import DashboardInput from "./DashboardInput";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getJobs = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/job/all");
      console.log(response.data);
      setJobs(response.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setError("Failed to fetch jobs. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch jobs on component mount
  useEffect(() => {
    getJobs();
  }, []);
  const navigate = useNavigate();
  return (
    <div className="me-md-3">
      <div>
        <Title icon={BaggageClaim} title={"Jobs"} />
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
            <div className="col">
              <select className="form-select rounded-3">
                <option>Job Status</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
            <div className="col">
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
            className="btn btn-outline-dark"
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
      <table className="table table-striped table-hover border text-center">
        <thead className="table-light">
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
          {jobs?.map((job, index) => (
            <tr
              key={index}
              className="cursor-pointer"
              onClick={() => navigate("job-profile/" + job?.id)}
            >
              <td>{index + 1}</td>
              <td className="text-capitalize">{job?.jobTitle}</td>
              <td className="text-capitalize">
                {job?.createdBy?.parent?.name}
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
                <div className="card p-2">{job?.hired ? job?.hired : "-"}</div>
              </td>
              {/* <td dangerouslySetInnerHTML={{ __html: job?.jobDescription }}></td>
              <td>{job?.jobLocation}</td>
              <td dangerouslySetInnerHTML={{ __html: job?.companyDescription }}></td>
              <td dangerouslySetInnerHTML={{ __html: job?.jobQualification }}></td>
              <td dangerouslySetInnerHTML={{ __html: job?.jobAdditionalInformation }}></td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Jobs;
