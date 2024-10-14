import { BaggageClaim, Calendar, Grid2x2Check, User2 } from "lucide-react";
import React from "react";
import { useLocation } from "react-router-dom";
import image from "../assets/interview-scheduled.svg";

const Dashboard = () => {
  const location = useLocation();
  const interviewScheduled = false;

  return (
    <div className="vh-100 d-md-flex w-100">
      <div className="dashboard-nav d-flex align-items-center justify-content-center d-md-block me-md-3 py-md-5 d-none d-md-block ">
        <div className="logo fs-6 w-100 text-center text-white  fw-semibold fs-4">
          Logo
        </div>
        <ul className="text-decoration-none list-unstyled text-center text-white d-flex d-md-block py-md-5 d-flex align-items-center justify-content-center ">
          <div className="mb-4">
            <Grid2x2Check
              className={`dashboard-links cursor-pointer ${
                location.pathname === "/dashboard" ? "active-link" : ""
              } `}
            />
          </div>
          <div className="mb-4">
            <User2
              className={`dashboard-links cursor-pointer ${
                location.pathname === "/dashboard/users" ? "active-link" : ""
              } `}
            />
          </div>
          <div className="mb-4">
            <BaggageClaim
              className={`dashboard-links cursor-pointer ${
                location.pathname === "/dashboard/job" ? "active-link" : ""
              } `}
            />
          </div>
        </ul>
      </div>
      <div className="w-100 ">
        <div className="dashboard-nav p-3 d-flex align-items-center justify-content-between ">
          <div className="fs-3 text-white">Logo</div>
          <div className="d-flex gap-4 align-items-center justify-content-between">
            <div className="">
              <Grid2x2Check
                className={`dashboard-links cursor-pointer ${
                  location.pathname === "/dashboard"
                    ? "active-link"
                    : "text-white"
                } `}
              />
            </div>
            <div className="">
              <User2
                className={`dashboard-links cursor-pointer ${
                  location.pathname === "/dashboard/users"
                    ? "active-link"
                    : "text-white"
                } `}
              />
            </div>
            <div className="">
              <BaggageClaim
                className={`dashboard-links cursor-pointer ${
                  location.pathname === "/dashboard/job"
                    ? "active-link"
                    : "text-white"
                } `}
              />
            </div>
          </div>
        </div>
        <div className="w-100 border-bottom p-2 d-flex align-items-center justify-content-start gap-2 fw-bolder fs-3 text-primary mt-md-0 mt-3 ">
          <Grid2x2Check className={`dashboard-links cursor-pointer`} />{" "}
          Dashboard
        </div>
        <div className="row m-0 p-2 p-md-0">
          <div className="col-12 col-md-8 border-end h-100 p-md-0 px-2">
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
