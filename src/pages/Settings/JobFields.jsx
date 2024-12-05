import { SquareKanban } from "lucide-react";
import Title from "../../components/dashboard/Title";
import DashboardInput from "../../components/dashboard/DashboardInput";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { showToast } from "../../components/global/showToast";
import { Trash2Icon } from "lucide-react";

const token = localStorage.getItem("token");
const userData = token && jwtDecode(token);

const JobFields = () => {
  const navigate = useNavigate();

  return (
    <div className="me-md-3">
      <div>
        <Title icon={SquareKanban} title={"Job Fields"} />
      </div>
      <div className="w-75 mx-auto mt-2">
        <DashboardInput />
      </div>
      <div className="d-flex gap-4 w-100 align-items-center justify-content-center">
        <div className="my-md-4">
          <div className="row">
            <div className="col">
              <select className="form-select rounded-3">
                <option>Job Shows</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
            <div className="col">
              <select className="form-select rounded-3">
                <option>Department</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
            <div className="col">
              <select className="form-select rounded-3">
                <option>Location</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <button
            className="btn btn-primary btn-theme"
            onClick={() => navigate("create")}
          >
            Add Field
          </button>
        </div>
        <div className="col d-flex">
          <select className="form-select w-auto">
            <option value={5}>25</option>
            <option value={50}>50</option>
            <option value={75}>75</option>
            <option value={100}>100</option>
          </select>
        </div>
      </div>

      <table></table>
    </div>
  );
};

export default JobFields;
