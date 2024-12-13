import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const interviews = [
  {
    date: "13",
    month: "July 2024",
    day: "Monday",
    job: "UI/UX Designer",
    time: "07:00 PM - 08:00 PM",
  },
  {
    date: "15",
    month: "July 2024",
    day: "Monday",
    job: "Frontend Developer",
    time: "07:00 PM - 08:00 PM",
  },
  {
    date: "26",
    month: "July 2024",
    day: "Monday",
    job: "Backend Developer",
    time: "07:00 PM - 08:00 PM",
  },
  {
    date: "22",
    month: "July 2024",
    day: "Monday",
    job: "Project Manager",
    time: "07:00 PM - 08:00 PM",
  },
  {
    date: "07",
    month: "July 2024",
    day: "Monday",
    job: "Customer Manager",
    time: "07:00 PM - 08:00 PM",
  },
  {
    date: "12",
    month: "July 2024",
    day: "Monday",
    job: "UI/UX Designer",
    time: "07:00 PM - 08:00 PM",
  },
];

const Calendar = () => {
  return (
    <div className="card border-1   shadow-main">
      {/* Header Section */}
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Interview 📅</h5>
        <div>
          <button
            className="btn btn-light dropdown-toggle btn-sm"
            type="button"
            data-bs-toggle="dropdown"
          >
            Today
          </button>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="card-body">
        {/* Calendar Grid */}
        <div className="mb-2 d-flex align-items-center justify-content-between  w-full">
          <button className="btn btn-sm btn-light border">&lt;</button>
          <div>December 2024</div>

          <button className="btn btn-sm btn-light border">&gt;</button>
        </div>

        {/* Calendar Days */}
        <div
          className="d-grid gap-2"
          style={{ gridTemplateColumns: "repeat(7, 1fr)" }}
        >
          {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
            <div
              key={day}
              className="text-muted border rounded-pill p-2 w-2 h-2 text-center"
            >
              {day}
            </div>  
          ))}
          {Array?.from({ length: 31 }).map((_, index) => (
            <div
              key={index}
              className={`p-2 rounded-pill border text-center ${
                index === 8 || index === 21
                  ? "bg-blue-calendar text-white  "
                  : ""
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Interview List Section */}
      <div className="card-footer">
        {interviews.map((item, index) => (
          <div
            key={index}
            className="d-flex justify-content-between align-items-center border rounded shadow-sm overflow-hidden  bg-white mb-2"
          >
            <div className="d-flex">
              <div
                className="h-full w-4  bg-main bg-blue p-3"
                style={{ color: "#3B6ABC" }}
              >
                {" -"}
              </div>
              <h6 className="mb-0 p-3">{item.job}</h6>
              <small className="text-muted p-3">
                {item.day}, {item.month}
              </small>
            </div>
            <span className="text-primary fw-bold p-3">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
