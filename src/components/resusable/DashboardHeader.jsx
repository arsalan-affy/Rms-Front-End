import { Bell } from "lucide-react";
import React from "react";
import image from "../../assets/icons/Vector.svg";

const DashboardHeader = ({ title, onchange }) => {
  return (
    <>
      <div className=" bg-white p-2 d-flex align-items-center justify-content-between">
        <div
          className="fs-4 fw-semibold "
          style={{ color: "#012169", overflowY: "hidden" }}
        >
          {title}
        </div>
        <div className="w-1/2 d-none d-md-block">
          <input
            className="rounded-5 px-4 py-2 w-full "
            placeholder="search"
            onChange={onchange}
            style={{ minWidth: "500px", border: "1px solid #D9D9D9" }}
          />
        </div>
        <div className="d-flex align-items-center justify-content-between gap-3 me-2 ">
          <Bell className="cursor-pointer" />
          <img src={image} className="w-20 h-20 cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
