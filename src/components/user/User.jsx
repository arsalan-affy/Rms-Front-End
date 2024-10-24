/* eslint-disable react/prop-types */
import { User2 } from "lucide-react";
import Title from "../dashboard/Title";
import { useState } from "react";

const User = () => {
  const jobList = [
    {
      title: "Sr. Test Engineer",
      location: "Bangalore, Karnataka",
      experience: "2-5 years",
      rating: 5,
    },
    {
      title: "Sr. Test Engineer",
      location: "Bangalore, Karnataka",
      experience: "2-5 years",
      rating: 5,
    },
    {
      title: "Sr. Test Engineer",
      location: "Bangalore, Karnataka",
      experience: "2-5 years",
      rating: 5,
    },
  ];
  const [active, setActive] = useState("Home");
  return (
    <>
      <Title icon={User2} title={active == "Home" ? "Users" : "Jobs"} />
      <div className="me-md-4 m-md-0 m-3 mt-4">
        <div className="row mt-2">
          {/* Profile Section */}
          <div className="col-lg-3 col-md-4">
            <ProfileCard setActive={setActive} active={active} />
          </div>
          {active === "Home" && (
            <div className="col-lg-6 col-md-6 ">
              <div className="d-flex align-items-center justify-content-between">
                <div className="mb-3 fs-2 fw-semibold">
                  Recommended jobs for you
                </div>
                <div className="d-flex justify-content-between">
                  <button className=" btn  border  btn-sm fw-bold text-yellow">
                    View all
                  </button>
                </div>
              </div>
              <div>
                {jobList?.map((job, index) => (
                  <JobCard key={index} job={job} />
                ))}
              </div>
            </div>
          )}
          {/* Job Search Journey Section */}
          {active === "Home" && (
            <div className="col-lg-3 col-md-12 ">
              <JobSearchJourney />
            </div>
          )}
          {active === "Jobs" && (
            <div className="col-lg-10">
              <div className="mb-3 fs-2 fw-semibold ">Jobs for you</div>
              <div>
                {jobList?.map((job, index) => (
                  <JobCard key={index} job={job} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const ProfileCard = ({ setActive, active }) => {
  return (
    <div className="profile-card text-center d-flex flex-column">
      <div
        className="rounded-circle  mx-auto mb-4 d-flex align-items-center justify-content-center "
        style={{
          width: "5rem",
          height: "5rem",
          border: "1px solid #FBBB00",
        }}
      >
        <User2 className="w-75 h-75" style={{ color: "#FBBB0070" }} />
      </div>
      <h5 className="mb-1">Username</h5>
      <p className="text-muted">Course Name</p>
      <p className="text-muted">University/Company Name</p>
      <button className=" btn bg-primary-main btn-sm text-white">
        Update Profile
      </button>
      <div className="d-flex align-items-center justify-content-center flex-column d-flex gap-2 mt-3">
        <div
          onClick={() => setActive("Home")}
          className={
            active == "Home" ? "text-yellow cursor-pointer" : "cursor-pointer"
          }
        >
          Home
        </div>
        <div
          className={
            active == "Jobs" ? "text-yellow cursor-pointer" : "cursor-pointer"
          }
          onClick={() => setActive("Jobs")}
        >
          Jobs
        </div>
      </div>
    </div>
  );
};

const JobCard = ({ job = {} }) => {
  const stars = "★".repeat(job.rating) + "☆".repeat(5 - job.rating);

  return (
    <div className="job-card mb-3 border">
      <div className="mb-2 fs-4 fw-bold d-flex align-items-center justify-content-between w-100">
        {job.title}
        <div className="rating-stars">{stars}</div>
      </div>
      <div className="mb-1">{job?.location}</div>
      <div className="mb-1">{job?.experience}</div>
      <div className="d-flex justify-content-between">
        <button className="apply-btn btn rounded-2 shadow-sm fw-bold text-white bg-yellow">
          Apply
        </button>
      </div>
    </div>
  );
};

const JobSearchJourney = () => {
  return (
    <div>
      <div>Where are you in your job search journey?</div>
      <div className="col-12 ">
        <button className="btn btn-outline-primary col-6 btn-sm ">
          Actively searching jobs
        </button>
        <button className="btn btn-outline-primary col-6 btn-sm">
          Preparing for interview
        </button>
        <button className="btn btn-outline-primary col-6 btn-sm">
          Appearing for interview
        </button>
        <button className="btn btn-outline-primary col-6 btn-sm">
          Received a job offer
        </button>
        <button className="btn btn-outline-primary col-6 btn-sm">
          Casually exploring jobs
        </button>
        <button className="btn btn-outline-primary col-6 btn-sm">
          Not looking for jobs
        </button>
      </div>
    </div>
  );
};

export default User;
