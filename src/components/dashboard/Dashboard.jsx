import { Bell, Grid2x2Check, User } from "lucide-react";
import Title from "./Title";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import DashboardDropdown from "./DashboardDropdown";
import JobsPipeline from "./dashboard/JobsPipeline";
import NewJobs from "./dashboard/NewJobs";
import Calendar from "./dashboard/Calenders";
import DashboardHeader from "../resusable/DashboardHeader";

const Dashboard = ({ navlinks }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const interviewScheduled = false;

  return (
    <>
      <DashboardHeader title={"Dashboard"} />

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
    </>
  );
};

export default Dashboard;
