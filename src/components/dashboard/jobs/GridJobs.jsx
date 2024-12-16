import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
import { Clock, Watch } from "lucide-react";

const GridJobs = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Calculate indices for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container-fluid">
      {/* Parent container */}
      <div className="row g-4 mx-auto" /* g-4 adds spacing */>
        {currentItems.map((item) => (
          <div className="col-12 col-lg-4 px-2">
            <div
              key={item.id}
              className="rounded-3 shadow"
              style={{
                border: "1px solid #88806",
                padding: "12px",
                minHeight: "230px",
                // margin: "10px",
                background: "#fff",
                height: "100%",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: "100%",
                }}
              >
                <div className="fs-4 fw-semibold" style={{ color: "#0B2B82" }}>
                  {item.title}
                </div>
                <div style={{ color: "#787878" }}>{item.description}</div>
                <div className="d-flex gap-2 my-2">
                  {item?.tags?.map((item) => {
                    return (
                      <button
                        className="rounded-pill btn border btn-sm fw-semibold"
                        style={{ fontSize: ".7rem" }}
                        key={item}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
                <div className="d-flex align-items-center gap-2  rounded-2 px-1">
                  <Clock size={16} />
                  apply before
                  <span className="fw-semibold">{item.applyBefore}</span>
                </div>
                <div>
                  <div
                    className="blue text-lg d-flex align-items-center w-100 justify-content-between"
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      color: "#3D589B",
                    }}
                  >
                    <div>
                      <IoLocationOutline /> {item.location}
                    </div>
                    <button
                      className="fs-6 blue btn fw-semibold"
                      style={{
                        color: "#3D589B",
                      }}
                    >
                      More Details <FiArrowUpRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <nav className="mt-5">
        <ul className="pagination justify-content-center gap-2">
          <li className={`page-item ${currentPage === 1 && "disabled"}`}>
            <button
              className="page-link border-0 rounded-pill "
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
          </li>
          {[...Array(totalPages)].map((_, index) => (
            <li key={index} className={`border-0 rounded-pill`}>
              <button
                className="page-link rounded-pill"
                style={
                  currentPage === index + 1
                    ? { background: "#E3EBF7", color: "#285192" }
                    : {}
                }
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li
            className={`page-item border-0 rounded-pill ${
              currentPage === totalPages && "disabled"
            }`}
          >
            <button
              className="page-link rounded-pill"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default GridJobs;
