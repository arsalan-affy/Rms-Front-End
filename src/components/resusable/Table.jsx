import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import { useState } from "react";

const Table = ({ applicants, isApplicant = false }) => {
  const [applicant, setApplicantData] = useState(applicants);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = applicants.slice(firstItemIndex, lastItemIndex);
  const totalPages = Math.ceil(applicants.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <MDBTable responsive className="table  rounded-5 shadow mt-1">
        <MDBTableHead className="table-light">
          <tr>
            <th> </th>
            {Object.keys(applicants[0]).map((item) => {
              return <th key={item}>{item}</th>;
            })}
            {isApplicant && <th> </th>}
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {currentItems?.map((applicant) => (
            <tr key={applicant?.id}>
              <td>
                <input
                  type="checkbox"
                  className="bg-blue rounded-2xl mx-auto ms-3"
                />
              </td>
              {Object.keys(applicant).map((key) => (
                <td key={key}>{applicant[key]}</td>
              ))}
              {isApplicant && (
                <td>
                  <button
                    className="btn  btn-sm border bg-blue-calendar"
                    style={{ color: "#2D82B5" }}
                  >
                    Resume/CV
                  </button>
                </td>
              )}
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
      <nav className="mt-5">
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
  );
};

export default Table;
