import React from "react";

const DashboardMainContainer = ({ children, className }) => {
  return (
    <div className="container-fluid ">
      <div
        className={className}
        style={{
          minHeight: "92vh",
          marginLeft: "-1.4em",
          padding: "1rem",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default DashboardMainContainer;
