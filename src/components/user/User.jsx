/* eslint-disable react/prop-types */
import { User2 } from "lucide-react";
import Title from "../dashboard/Title";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
        <div className="row mt-2 container-fluid mx-auto">
          {/* Profile Section */}
          <div className="col-lg-3 col-md-3">
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
              <div
                className="scroll-hide"
                style={{ overflow: "auto", height: "40rem" }}
              >
                {jobList?.map((job, index) => (
                  <JobCard key={index} job={job} />
                ))}
              </div>
            </div>
          )}
          {/* Job Search Journey Section */}
          {active === "Home" && (
            <div className="col-lg-3 col-md-12  border">
              <JobSearchJourney />
            </div>
          )}
          {active === "Jobs" && (
            <div className="col-lg-9">
              <div className="mb-3 fs-2 fw-semibold ">Jobs for you</div>
              <>
                {jobList?.map((job, index) => (
                  <JobCard key={index} job={job} />
                ))}
              </>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const ProfileCard = ({ setActive, active }) => {
  return (
    <div className="profile-card text-center d-flex flex-column w-100 mx-auto">
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
  const location = useLocation();
  const stars = "★".repeat(job.rating) + "☆".repeat(5 - job.rating);
  const navigate = useNavigate();
  const routeTo = location.pathname.includes("/jobs")
    ? job.title
    : "/users/jobs/" + job.title;

  return (
    <div
      className="job-card mb-3 mx-2 border cursor-pointer"
      onClick={() => navigate(routeTo)}
    >
      <div className="mb-2 fs-4 fw-bold d-flex align-items-center justify-content-between w-100">
        <div className="rating-stars">{stars}</div>
      </div>
      <div className="mb-1">{job?.location}</div>
      <div className="mb-1">{job?.experience}</div>
      <div className="d-flex justify-content-between">
        <Link
          to={routeTo}
          className="apply-btn btn rounded-2 shadow-sm fw-bold text-white bg-yellow"
        >
          Apply
        </Link>
      </div>
    </div>
  );
};

const JobDescription = ({ job }) => {
  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm" style={{ borderRadius: "10px" }}>
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h4>Sr. Test Engineer</h4>
            <p className="text-muted mb-1">Bangalore, Karnataka</p>
            <p className="text-muted">2-5 years</p>
          </div>
          <div className="text-end">
            <span className="text-warning">☆☆☆☆☆</span>
          </div>
        </div>
        <h5 className="mt-3">Job Description</h5>
        <div className="row mt-3">
          <div className="col-md-4">
            <div
              className="card p-3 shadow-sm text-white"
              style={{ backgroundColor: "#6A5ACD", borderRadius: "10px" }}
            >
              <h6 className="mb-3">
                Desired Profile <i className="bi bi-person-circle"></i>
              </h6>
              <ul className="list-unstyled">
                <li>abc</li>
                <li>abc</li>
                <li>abc</li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card p-3 shadow-sm text-white"
              style={{ backgroundColor: "#40E0D0", borderRadius: "10px" }}
            >
              <h6 className="mb-3">
                Qualification <i className="bi bi-file-earmark-text"></i>
              </h6>
              <ul className="list-unstyled">
                <li>abc</li>
                <li>abc</li>
                <li>abc</li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="card p-3 shadow-sm text-white"
              style={{ backgroundColor: "#3B5998", borderRadius: "10px" }}
            >
              <h6 className="mb-3">
                Skills Required <i className="bi bi-box-seam"></i>
              </h6>
              <ul className="list-unstyled">
                <li>abc</li>
                <li>abc</li>
                <li>abc</li>
              </ul>
            </div>
          </div>
        </div>

        <button
          className="btn btn-warning mt-4"
          style={{ borderRadius: "5px" }}
        >
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
        <button className="btn btn-outline-primary col-5 btn-sm m-2">
          Actively searching jobs
        </button>
        <button className="btn btn-outline-primary col-5 btn-sm m-2">
          Preparing for interview
        </button>
        <button className="btn btn-outline-primary col-5 btn-sm m-2">
          Appearing for interview
        </button>
        <button className="btn btn-outline-primary col-5 btn-sm m-2">
          Received a job offer
        </button>
        <button className="btn btn-outline-primary col-5 btn-sm m-2">
          Casually exploring jobs
        </button>
        <button className="btn btn-outline-primary col-5 btn-sm m-2">
          Not looking for jobs
        </button>
      </div>
    </div>
  );
};

export default User;
