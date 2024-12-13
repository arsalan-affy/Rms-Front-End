import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardHeader from "../../resusable/DashboardHeader";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";

const Applicants = () => {
  // Sample array of objects for the table data
  const applicants = [
    {
      id: "00001",
      name: "Christine Brooks",
      email: "chris@gmail.com",
      date: "04 Sep 2019",
      job: "UI/UX Designer",
    },
    {
      id: "00002",
      name: "Rosie Pearson",
      email: "rosie@gmail.com",
      date: "28 May 2023",
      job: "Frontend",
    },
    {
      id: "00003",
      name: "Darrell Caldwell",
      email: "darr@gmail.com",
      date: "23 Nov 2019",
      job: "Backend",
    },
    {
      id: "00004",
      name: "Gilbert Johnston",
      email: "gillie@gmail.com",
      date: "05 Feb 2019",
      job: "Project Manager",
    },
    {
      id: "00005",
      name: "Alan Cain",
      email: "alan@gmail.com",
      date: "29 Jul 2019",
      job: "CSA",
    },
    {
      id: "00006",
      name: "Alfred Murray",
      email: "alfred@gmail.com",
      date: "15 Aug 2019",
      job: "Manager",
    },
    {
      id: "00007",
      name: "Maggie Sullivan",
      email: "maggie@gmail.com",
      date: "21 Dec 2019",
      job: "SAP Consultant",
    },
    {
      id: "00008",
      name: "Rosie Todd",
      email: "rosie.todd@gmail.com",
      date: "30 Apr 2019",
      job: "Graphic Designer",
    },
    {
      id: "00009",
      name: "Dollie Hines",
      email: "dollie@gmail.com",
      date: "09 Jan 2019",
      job: "UI/UX",
    },
    {
      id: "00010",
      name: "Dollie Hines",
      email: "dollie@gmail.com",
      date: "09 Jan 2019",
      job: "UI/UX",
    },
    {
      id: "00010",
      name: "Dollie Hines",
      email: "dollie@gmail.com",
      date: "09 Jan 2019",
      job: "UI/UX",
    },
    {
      id: "00010",
      name: "Dollie Hines",
      email: "dollie@gmail.com",
      date: "09 Jan 2019",
      job: "UI/UX",
    },
    {
      id: "00010",
      name: "Dollie Hines",
      email: "dollie@gmail.com",
      date: "09 Jan 2019",
      job: "UI/UX",
    },
    {
      id: "00010",
      name: "Dollie Hines",
      email: "dollie@gmail.com",
      date: "09 Jan 2019",
      job: "UI/UX",
    },
    // Add more items as needed...
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Pagination logic
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = applicants.slice(firstItemIndex, lastItemIndex);
  const totalPages = Math.ceil(applicants.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <DashboardHeader title={"Applicants"} />
      <div
        className="border-top gap-3"
        style={{
          minHeight: "92vh",
          background: "#EDF5FD",
          marginLeft: "-.5em",
          padding: "1rem",
        }}
      >
        <MDBTable responsive className="table  rounded-5">
          <MDBTableHead className="table-light">
            <tr>
              <th></th>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Job</th>
              <th>Resume</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {currentItems.map((applicant) => (
              <tr key={applicant?.id}>
                <td>
                  <input type="checkbox" className="bg-blue rounded-2xl" />
                </td>
                <td>{applicant?.id}</td>
                <td>{applicant?.name}</td>
                <td>{applicant?.email}</td>
                <td>{applicant?.date}</td>
                <td>{applicant?.job}</td>
                <td>
                  <button
                    className="btn  btn-sm border bg-blue-calendar"
                    style={{ color: "#2D82B5" }}
                  >
                    Resume/CV
                  </button>
                </td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
        {/* Pagination */}
        <nav className="mt-3">
          <ul className="pagination justify-content-center gap-2">
            <li className={`page-item ${currentPage === 1 && "disabled"}`}>
              <button
                className="page-link border-0 rounded-pill"
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
    </div>
  );
};

export default Applicants;
