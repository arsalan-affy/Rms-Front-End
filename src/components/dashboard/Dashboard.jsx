/* eslint-disable react/prop-types */
import { Calendar, Grid2x2Check } from "lucide-react";
import Title from "./Title";
import image from "../../assets/interview-scheduled.svg";
import DashboardInput from "./DashboardInput";

const Dashboard = ({ navlinks }) => {
  const interviewScheduled = false;
  console.log(navlinks);

  return (
    <>
      <Title icon={Grid2x2Check} title={"Dashboard"} />
      <div className="row m-0 p-2 p-md-0">
        <div className="col-12 col-md-7 border-end h-100 p-md-4 px-2">
          <div className="fs-2 fw-semibold mb-2">Overview</div>
          <div className="row">
            <div className="col-12 col-md-4 mb-3">
              <div className="card dashboard-cards">
                <div className="d-flex align-items-start p-4 h-100 flex-column">
                  <h5 className="text-primary">New Jobs</h5>
                  <p className="card-text">Content for new jobs</p>
                  <h3 className="mt-auto text-yellow fs-1">75</h3>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <div className="card dashboard-cards">
                <div className="d-flex align-items-start p-4 h-100 flex-column">
                  <h5 className=" text-primary">Total Conditions</h5>
                  <p className="card-text">Content for total conditions</p>
                  <h3 className="mt-auto text-yellow fs-1">75</h3>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <div className="card dashboard-cards">
                <div className="d-flex align-items-start p-4 h-100 flex-column">
                  <h5 className=" text-primary">Active Jobs</h5>
                  <p className="card-text">Content for active jobs</p>
                  <h3 className="mt-auto text-yellow fs-1">75</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-md-4 mt-2">
            <div className="col-12 col-md-6 mb-3">
              <div className="fs-4 fw-semibold mb-2">Approve</div>
              <div className="border dashboard-lower-card">
                <div className="d-flex align-items-center p-4 h-100 flex-column">
                  <h5 className="card-title">Card 1</h5>
                  <p className="card-text">Content for card 1</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-3">
              <div className="fs-4 fw-semibold mb-2">
                Next Interview Scheduled
              </div>
              <div className="dashboard-lower-card border position-relative d-flex flex-column justify-content-center align-items-center p-4">
                <Calendar
                  style={{
                    position: "absolute",
                    top: 15,
                    right: 15,
                    color: "gray",
                  }}
                />
                {interviewScheduled ? (
                  <div className="text-center">
                    <h5 className="card-title">Next Interview</h5>
                    <p className="card-text">Interview details here</p>
                  </div>
                ) : (
                  <>
                    <img
                      className="mb-3"
                      src={image}
                      alt="No interview scheduled"
                    />
                    <p className="text-center mb-0 text-yellow">
                      No interview scheduled
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-5  p-md-4 px-2 ">
          <div className="fs-3 fw-bolder">Activity</div>
          <DashboardInput />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
