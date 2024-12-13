import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CalendarCheck } from "lucide-react";
import CalendarContainer from "./CalendarContainer";

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
        <h5 className="mb-0">
          Interview <CalendarCheck size={20} />
        </h5>
        <div>
          <button
            className="btn dropdown-toggle btn-sm"
            type="button"
            data-bs-toggle="dropdown"
          >
            Today
          </button>
        </div>
      </div>
      {/* Calendar Section */}

      <CalendarContainer />

      {/* Interview List Section */}
      <div className="card-footer">
        {interviews.map((item, index) => (
          <div
            key={index}
            className="d-flex justify-content-between align-items-center border rounded shadow-sm overflow-hidden  bg-white mb-2"
          >
            <div
              className="d-flex overflow-hidden"
              style={{ position: "relative" }}
            >
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
