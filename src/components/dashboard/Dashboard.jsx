import { Bell, Grid2x2Check, User } from "lucide-react";
import Title from "./Title";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import DashboardDropdown from "./DashboardDropdown";
import JobsPipeline from "./dashboard/JobsPipeline";
import NewJobs from "./dashboard/NewJobs";
import Calendar from "./dashboard/Calenders";
import image from "../../assets/icons/Vector.svg";

const Dashboard = ({ navlinks }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const interviewScheduled = false;

  return (
    <>
      <div className=" bg-white p-2 d-flex align-items-center justify-content-between">
        <div className="fs-2 fw-semibold " style={{ color: "#012169" }}>
          Dashboard
        </div>
        <div className="w-1/2 d-none d-md-block">
          <input
            className="rounded-5 px-4 py-2 w-full "
            placeholder="search"
            style={{ minWidth: "500px", border: "1px solid #D9D9D9" }}
          />
        </div>
        <div className="d-flex align-items-center justify-content-between gap-2 ">
          <Bell className="cursor-pointer"/>
          <img src={image} className="w-20 h-20 cursor-pointer" />
        </div>
      </div>
      <div className="container-fluid">
      <div
        className="row"
        style={{
          // minHeight: "92vh",
          background: "#EDF5FD",
          marginLeft: "-.5em",
          padding: "1rem",
        }}
      >
        <div
          className=" rounded-3  shadow-md d-flex flex-column gap-3 col-md-6 col-lg-8 col-sm-12"
          style={{ minHeight: "85vh" }}
        >
          <JobsPipeline />
          <NewJobs />
        </div>

        <div className="bg-white  h-50 rounded-3 shadow-md col-lg-4 col-md-6 col-sm-12">
          <Calendar />
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
