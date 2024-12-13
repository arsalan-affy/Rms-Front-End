import React from "react";
import { Doughnut } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";

const JobSummaryChart = () => {
  const data = {
    labels: ["In-Review", "Interview", "Offered", "Hired"],
    datasets: [
      {
        data: [41, 32, 23, 19], // Values for each section
        backgroundColor: ["#74b9ff", "#0984e3", "#3EB5E1", "#015C92"], // Colors
        hoverBackgroundColor: ["#81ecec", "#74b9ff", "#a29bfe", "#636e72"], // Hover colors
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top", // Display legend on the right
        labels: {
          color: "#333", // Legend text color
        },
      },
    },
  };

  return (
    <div className="card  shadow-main border">
      <div className="card-header border-0" style={{ background: "#fff" }}>
        <h5 className="mb-0">Job Summary</h5>
      </div>
      <div className="card-body">
        <div style={{ height: "300px", width: "100%" }}>
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default JobSummaryChart;
