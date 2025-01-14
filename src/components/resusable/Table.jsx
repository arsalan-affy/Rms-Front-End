import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import { useEffect, useRef, useState } from "react";
import ApplicantProfile from "./ApplicantProfile";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const Table = ({ applicants, isApplicant = false }) => {
  const [applicantData, setApplicant] = useState([]);
  const [tableHeader, setTableHeaders] = useState([]);
  const [applicant, setApplicantData] = useState(applicants);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = applicants?.slice(firstItemIndex, lastItemIndex);
  const totalPages = Math.ceil(applicants?.length / itemsPerPage);
  const location = useLocation();
  const jobHeaders = useEffect(() => {
    // jobs
    if (location.pathname.includes("/jobs")) {
      setTableHeaders([
        "Job Code",
        "Position",
        "Date",
        "Last Date",
        "Location",
        "Employment",
      ]);
    } else if (location.pathname.includes("/candidates")) {
      // candidates
      setTableHeaders(["ID", "NAME", "Email", "DATE", "JOB", "RESUME"]);
    }
  }, []);

  console.log(applicant);
  const handleSelectApplicant = (data) => {
    setApplicant((prev) => {
      if (prev[0]?.name === data.name) {
        return [];
      } else {
        return [data];
      }
    });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const ref = useRef();
  if (!applicants || !applicants.length) {
    return <div>No Jobs Found</div>;
  }
  // useEffect(() => {
  //   ref.current = gsap.timeline({
  //     paused: true,
  //   });
  //   ref.current.to(ref.current,{

  //   })
  // }, []);

  return (
    <div>
      <div className="rounded-2 shadow bg-white overflow-hidden mt-2">
        <MDBTable responsive>
          <MDBTableHead className="table-light">
            <tr>
              {isApplicant && <th> </th>}
              {applicants &&
                tableHeader.map((item) => {
                  return (
                    <th key={item} className="fw-medium">
                      {item}
                    </th>
                  );
                })}
              {isApplicant && <th> </th>}
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {currentItems?.map((applicant, index) => (
              <tr key={applicant?.id}>
                {!location?.pathname?.includes("/jobs") && (
                  <td>
                    <input
                      type="checkbox"
                      className="bg-blue rounded-2xl mx-auto ms-4 "
                      checked={applicantData[0] == applicant}
                      onClick={() => handleSelectApplicant(applicant)}
                    />
                  </td>
                )}
                {location.pathname.includes("/job") &&
                  applicant &&
                  applicants?.map((item, index) => {
                    const date = new Date(item.createdAt);
                    const lastDate = new Date(item.updatedAt);
                    return (
                      <>
                        <td key={index}>{item.jobCode}</td>
                        <td key={index} className="d-flex align-items-center">
                          {item.jobTitle}
                        </td>
                        <td>{date.toDateString()}</td>
                        <td>{lastDate.toDateString()}</td>
                        <td>{item?.jobLocation}</td>
                        <td>{item?.jobApproval}</td>
                      </>
                    );
                  })}

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
      </div>
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
      {applicantData.length > 0 && (
        <ApplicantProfile data={applicantData} ref={ref} />
      )}
    </div>
  );
};

export default Table;
