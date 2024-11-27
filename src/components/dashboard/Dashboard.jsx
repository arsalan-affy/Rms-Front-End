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
import { Grid2x2Check } from "lucide-react";
import Title from "./Title";
// import image from "../../assets/interview-scheduled.svg";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import DashboardDropdown from "./DashboardDropdown";

const Dashboard = ({ navlinks }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const interviewScheduled = false;
  console.log(navlinks);

  const dashboardCards = [
    { title: "New Jobs", number: 75 },
    { title: "Active Jobs", number: 75 },
    { title: "Total Jobs", number: 75 },
  ];

  const data = {
    labels: ["HIRED", "OFFERED", "INTERVIEW", "IN_REVIEW"],
    datasets: [
      {
        data: [30, 50, 50, 50],
        backgroundColor: ["#FF6384", "#36A2EB", "#22CE56", "#FFCE59"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FrCE56"],
      },
    ],
  };

  return (
    <>
      <Title icon={Grid2x2Check} title={"Dashboard"} />
      <div className="row m-0 p-2 p-md-0">
        <div className="col-12 col-md-7 border-end h-100 p-md-3 px-2">
          <div className="fs-2 fw-semibold mb-2">Overview</div>
          <div className="row">
            {dashboardCards?.map((item, index) => {
              return (
                <div className="col-12 col-md-4 mb-3" key={index}>
                  <div className="card dashboard-cards">
                    <div className="d-flex align-items-start p-4 h-100 flex-column">
                      <h5 className="text-primary fs-4">{item.title}</h5>
                      {/* <p className="card-text">Content for new jobs</p> */}
                      <h3 className="mt-auto text-yellow fs-1">
                        {item?.number}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row ">
            <div className="fs-2 fw-semibold mb-2">Analytics</div>
            <div className="mx-auto w-full w-50">
              <Doughnut data={data} />
            </div>
          </div>
        </div>
        <DashboardDropdown />
      </div>
    </>
  );
};

export default Dashboard;
