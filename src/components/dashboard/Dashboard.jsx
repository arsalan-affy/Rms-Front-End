import { Bell, Grid2x2Check, User } from "lucide-react";
import Title from "./Title";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import DashboardDropdown from "./DashboardDropdown";
import JobsPipeline from "./dashboard/JobsPipeline";
import NewJobs from "./dashboard/NewJobs";
import Calendar from "./dashboard/Calenders";
import DashboardHeader from "../resusable/DashboardHeader";
import DashboardMainContainer from "../resusable/Dashboard-main-container";

const Dashboard = ({ navlinks }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const interviewScheduled = false;

  return (
    <>
      <DashboardHeader title={"Dashboard"} />
      <DashboardMainContainer className={"row"}>
        <div className="rounded-3 shadow-md d-flex flex-column gap-3 col-md-6 col-lg-8 col-sm-12">
          <JobsPipeline />
          <NewJobs />
        </div>
        <div className="rounded-3 shadow-md col-lg-4 col-md-6 col-sm-12">
          <Calendar />
        </div>
      </DashboardMainContainer>
    </>
  );
};

export default Dashboard;
