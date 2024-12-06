import React, { useState } from "react";


const TableComponent = ({
  headers,
  data,
  filters = [],
  pageSizeOptions = [25, 50, 75, 100],
  currentPage,
  totalPages,
  onPageChange,
  onPageSizeChange,
  onFilterChange,
  onAction,
}) => {
  const [selectedPageSize, setSelectedPageSize] = useState(pageSizeOptions[0]);

  const handlePageSizeChange = (e) => {
    const size = Number(e.target.value);
    setSelectedPageSize(size);
    onPageSizeChange(size);
  };

  return (
    <div>
      {/* Filters */}
      {filters.length > 0 && (
        <div className="d-flex gap-4 mb-4">
          {filters.map((filter, index) => (
            <div key={index}>
              <select
                className="form-select rounded-3"
                onChange={(e) => onFilterChange(filter.key, e.target.value)}
              >
                <option value="">{filter.label}</option>
                {filter.options.map((option, idx) => (
                  <option key={idx} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      )}

      {/* Table */}
      <div className="table-data">
        <table className="table table-striped table-hover border text-center center-table">
          <thead className="table-light">
            <tr>
              {headers.map((header, index) => (
                <th key={index} style={{ width: header.width }}>
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index}>
                  {headers.map((header, idx) => (
                    <td key={idx}>
                      {header.render
                        ? header.render(item[header.key], item)
                        : item[header.key]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={headers.length}>No data found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {data.length > 0 && (
        <div className="d-flex justify-content-between align-items-center">
          <select
            className="form-select w-auto"
            value={selectedPageSize}
            onChange={handlePageSizeChange}
          >
            {pageSizeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                <button
                  className="page-link"
                  onClick={() => onPageChange(currentPage - 1)}
                >
                  Previous
                </button>
              </li>
              {Array.from({ length: totalPages }).map((_, idx) => (
                <li
                  key={idx}
                  className={`page-item ${
                    currentPage === idx + 1 ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => onPageChange(idx + 1)}
                  >
                    {idx + 1}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => onPageChange(currentPage + 1)}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default TableComponent;
