/* eslint-disable react/prop-types */
import { BaggageClaim } from "lucide-react";
import Title from "./Title";
import DashboardInput from "./DashboardInput";
import { useNavigate } from "react-router-dom";

const Jobs = () => {
  const jobs = [
    {
      title: "Sr. Test Engineer",
      location: "Bangalore, Karnataka",
      recruiter: "Abc",
      new: 2,
      inReview: 2,
      interview: "-",
      offered: "-",
      hired: "-",
      leads: 1,
    },
    {
      title: "Software Developer",
      location: "Mumbai, Maharashtra",
      recruiter: "Def",
      new: 3,
      inReview: 1,
      interview: 1,
      offered: "-",
      hired: 1,
      leads: 1,
    },
    {
      title: "Sr. Test Engineer",
      location: "Bangalore, Karnataka",
      recruiter: "Abc",
      new: 2,
      inReview: 2,
      interview: "-",
      offered: "-",
      hired: "-",
      leads: 1,
    },
    {
      title: "Software Developer",
      location: "Mumbai, Maharashtra",
      recruiter: "Def",
      new: 3,
      inReview: 1,
      interview: 1,
      offered: "-",
      hired: 1,
      leads: 1,
    },
    {
      title: "Sr. Test Engineer",
      location: "Bangalore, Karnataka",
      recruiter: "Abc",
      new: 2,
      inReview: 2,
      interview: "-",
      offered: "-",
      hired: "-",
      leads: 1,
    },
    {
      title: "Software Developer",
      location: "Mumbai, Maharashtra",
      recruiter: "Def",
      new: 3,
      inReview: 1,
      interview: 1,
      offered: "-",
      hired: 1,
      leads: 1,
    },
    {
      title: "Sr. Test Engineer",
      location: "Bangalore, Karnataka",
      recruiter: "Abc",
      new: 2,
      inReview: 2,
      interview: "-",
      offered: "-",
      hired: "-",
      leads: 1,
    },
    {
      title: "Software Developer",
      location: "Mumbai, Maharashtra",
      recruiter: "Def",
      new: 3,
      inReview: 1,
      interview: 1,
      offered: "-",
      hired: 1,
      leads: 1,
    },
    {
      title: "Sr. Test Engineer",
      location: "Bangalore, Karnataka",
      recruiter: "Abc",
      new: 2,
      inReview: 2,
      interview: "-",
      offered: "-",
      hired: "-",
      leads: 1,
    },
    {
      title: "Software Developer",
      location: "Mumbai, Maharashtra",
      recruiter: "Def",
      new: 3,
      inReview: 1,
      interview: 1,
      offered: "-",
      hired: 1,
      leads: 1,
    },
    // Add more job objects as needed
  ];
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
      <table className="table table-striped table-hover border">
        <thead className="table-light">
          <tr>
            <th scope="col">Jobs</th>
            <th scope="col">Recruiter</th>
            <th scope="col">Hiring Manager</th>
            <th scope="col">New</th>
            <th scope="col">In-review</th>
            <th scope="col">Interview</th>
            <th scope="col">Offered</th>
            <th scope="col">Hired</th>
            <th scope="col">Leads</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the jobs array */}
          {jobs?.map((job, index) => (
            <tr
              key={index}
              className="cursor-pointer"
              onClick={() => navigate("job-profile/" + job?.title)}
            >
              <td>{job?.title}</td>
              <td>{job?.location}</td>
              <td>{job?.recruiter}</td>
              <td>{job?.new}</td>
              <td>{job?.inReview}</td>
              <td>{job?.interview}</td>
              <td>{job?.offered}</td>
              <td>{job?.hired}</td>
              <td>{job?.leads}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Jobs;
