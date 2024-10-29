import React from "react";
import Navbar from "../components/Navbar";

export default function Careers() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row my-2">
          <div className="col-md-12 my-2">
            <div className="card p-3">
              <h5>Filter</h5>
            </div>
          </div>
          <div className="col-md-12 my-2">
            <div className="card p-3">
              <h5>Careers</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
