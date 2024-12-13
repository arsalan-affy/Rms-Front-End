// import { Grid2x2Check } from "lucide-react";
// import Title from "./Title";

// import { Doughnut } from "react-chartjs-2";
// import DashboardInput from "./DashboardInput";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { useState } from "react";

// const Dashboard = ({ navlinks }) => {
//   ChartJS.register(ArcElement, Tooltip, Legend);
//   const interviewScheduled = false;
//   console.log(navlinks);
//   const [selectJobs, setSelectJobs] = useState("");

//   const dashboardCards = [
//     { title: "New Jobs", number: 75 },
//     { title: "Active Jobs", number: 75 },
//     { title: "Total Jobs", number: 75 },
//   ];

//   const data = {
//     labels: ["HIRED", "OFFERED", "INTERVIEW", "IN_REVIEW"],
//     datasets: [
//       {
//         data: [300, 50, 100, 50],
//         backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FFCE59"],
//         hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FrCE56"],
//       },
//     ],
//   };

//   return (
//     <>
//       <Title icon={Grid2x2Check} title={"Dashboard"} />
//       <div className="row m-0 p-2 p-md-0">
//         <div className="col-12 col-md-7 border-end h-100 p-md-4 px-2">
//           <div className="fs-2 fw-semibold mb-2">Overview</div>
//           <div className="row">
//             {dashboardCards?.map((item, index) => {
//               return (
//                 <div className="col-12 col-md-4 mb-3" key={index}>
//                   <div className="card dashboard-cards">
//                     <div className="d-flex align-items-start p-4 h-100 flex-column">
//                       <h5 className="text-primary">{item.title}</h5>
//                       {/* <p className="card-text">Content for new jobs</p> */}
//                       <h3 className="text-yellow fs-1">{item.number}</h3>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//           <div className="row mt-md-4 mt-2">
//             <div className="fs-2 fw-semibold mb-2">Hiring</div>
//             <div className="mx-auto w-full w-50">
//               <Doughnut data={data} />
//             </div>
//           </div>
//         </div>
//         <div className="col-md-5 col-12  p-md-4 px-2">
//           <div className="fs-3 fw-bolder">Jobs</div>
//           <select
//             onChange={(event) => {
//               const value = event.target.value; //
//               setSelectJobs(value);
//               console.log(value);
//             }}
//             className="form-select"
//             aria-label="Default select example"
//           >
//             <option selected>Open this select Jobs</option>
//             <option value="recent-jobs">Recent Jobs</option>
//             <option value="new-jobs">New Jobs</option>
//             <option value="active-jobs">Active Jobs</option>
//             <option value="total-jobs">Total Jobs</option>
//           </select>
//         </div>
//         <div className="mt-4">{selectJobs}</div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;

/* eslint-disable react/prop-types */
import { Bell, Grid2x2Check, User } from "lucide-react";
import Title from "./Title";
// import image from "../../assets/interview-scheduled.svg";

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
      <div
        className="border-top  d-flex flex-column flex-md-row gap-3"
        style={{
          minHeight: "92vh",
          background: "#EDF5FD",
          marginLeft: "-.5em",
          padding: "1rem",
        }}
      >
        <div
          className=" rounded-3  shadow-md d-flex flex-column gap-3 col-md-6 col-lg-7 col-sm-12"
          style={{ minHeight: "85vh" }}
        >
          <JobsPipeline />
          <NewJobs />
        </div>

        <div className="bg-white  h-50 rounded-3 shadow-md col-lg-5 col-md-6 col-sm-12">
          <Calendar />
        </div>
      </div>
    </>
    // <>
    //   <Title icon={Grid2x2Check} title={"Dashboard"} />
    //   <div className="row m-0 p-2 p-md-0">
    //     <div className="col-12 col-md-7 border-end h-100 p-md-3 px-2">
    //       <div className="fs-2 fw-semibold mb-2">Overview</div>
    //       <div className="row">
    //         {dashboardCards?.map((item, index) => {
    //           return (
    //             <div className="col-12 col-md-4 mb-3" key={index}>
    //               <div className="card dashboard-cards">
    //                 <div className="d-flex align-items-start p-4 h-100 flex-column">
    //                   <h5 className="text-primary fs-4">{item.title}</h5>
    //                   {/* <p className="card-text">Content for new jobs</p> */}
    //                   <h3 className="mt-auto text-yellow fs-1">
    //                     {item?.number}
    //                   </h3>
    //                 </div>
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>
    //       <div className="row ">
    //         <div className="fs-2 fw-semibold mb-2">Analytics</div>
    //         <div className="mx-auto w-full w-50">
    //           <Doughnut data={data} />
    //         </div>
    //       </div>
    //     </div>
    //     <DashboardDropdown />
    //   </div>
    // </>
  );
};

export default Dashboard;
