import { Settings } from "lucide-react";
import Title from "../components/dashboard/Title";
import DashboardInput from "../components/dashboard/DashboardInput";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Fixed import
import { showToast } from "../components/global/showToast";
import { Trash2Icon } from "lucide-react";
import { useProfileData } from "../components/global/profileData";

const token = localStorage.getItem("token");
const userData = token && jwtDecode(token);

// Define roles and fields
const roles = [
  "SUPER_ADMIN",
  "COMPANY",
  "ADMIN",
  "RECRUITER",
  "USER",
  "EMPLOYEE",
];
const fieldsByRole = {
  SUPER_ADMIN: ["My Account", "Configuration", "Permissions"],
  COMPANY: ["My Account", "Configuration", "Permissions"],
  ADMIN: ["My Account", "Configuration", "Permissions"],
  RECRUITER: ["My Account"],
  USER: ["My Account"],
  EMPLOYEE: ["My Account"],
};

const routesByRole = {
  SUPER_ADMIN: {
    myProfile: "my-profile",
    loginPassword: "login-password",
    emailPreferences: "#",
    jobFields: "#",
    screeningQuestions: "#",
    userManagement: "#",
    systemRoles: "#",
  },
  COMPANY: {
    myProfile: "my-profile",
    loginPassword: "login-password",
    emailPreferences: "#",
    jobFields: "job-fields",
    screeningQuestions: "#",
    userManagement: "user-management",
    systemRoles: "#",
  },
  ADMIN: {
    myProfile: "my-profile",
    loginPassword: "login-password",
    emailPreferences: "#",
    jobFields: "job-fields",
    screeningQuestions: "#",
    userManagement: "user-management",
    systemRoles: "#",
  },
  RECRUITER: {
    myProfile: "my-profile",
    loginPassword: "login-password",
    emailPreferences: "#",
  },
  USER: {
    myProfile: "my-profile",
    loginPassword: "login-password",
    emailPreferences: "#",
  },
  EMPLOYEE: {
    myProfile: "my-profile",
    loginPassword: "login-password",
    emailPreferences: "#",
  },
};

const SettingsProfile = () => {
  const { profileData, loading } = useProfileData();
  const [accessibleFields, setAccessibleFields] = useState([]);

  useEffect(() => {
    if (
      userData &&
      userData.claims.role &&
      roles.includes(userData.claims.role)
    ) {
      setAccessibleFields(fieldsByRole[userData.claims.role] || []);
    } else {
      showToast("error", "Unauthorized access!");
      navigate("/login");
    }
  }, []);

  const navigate = useNavigate();

  return (
    <div className="me-md-3 ">
      <div>
        <Title icon={Settings} title={"Settings"} />
      </div>
      <div className="container setting-container my-3 gap-1">
        <div className="row">
          <div className="col-md-4 mb-3 border p-4 border rounded-2 shadow-sm">
            <img
              className="user-img"
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="user"
            />
            <div className="mt-2 fw-semibold fs-4">
              {profileData?.name || "Placeholder Name"}
            </div>
            <div className="fw-semibold fs-7">
              {profileData?.role || "N/A"}
            </div>
          </div>
          {accessibleFields.includes("My Account") && (
            <div className="col-md-4 mb-3 border p-4 border rounded-2 shadow-sm">
              <div className="section">
                <h4>
                  <strong>My Account</strong>
                </h4>
                <div className="section-content">
                  <div
                    className="section-item"
                    onClick={() =>
                      navigate(routesByRole[userData.claims.role]?.myProfile)
                    }
                  >
                    My Profile
                  </div>
                  <div
                    className="section-item"
                    onClick={() =>
                      navigate(
                        routesByRole[userData.claims.role]?.loginPassword
                      )
                    }
                  >
                    Login & Password
                  </div>
                  <div
                    className="section-item"
                    onClick={() =>
                      navigate(
                        routesByRole[userData.claims.role]?.emailPreferences
                      )
                    }
                  >
                    Email Preferences
                  </div>
                </div>
              </div>
            </div>
          )}
          {accessibleFields.includes("Configuration") && (
            <div className="col-md-4 mb-3 border p-4 border rounded-2 shadow-sm">
              <div className="section">
                <h4>
                  <strong>Configuration</strong>
                </h4>
                <div className="section-content">
                  <div
                    className="section-item"
                    onClick={() =>
                      navigate(routesByRole[userData.claims.role]?.jobFields)
                    }
                  >
                    Job Fields
                  </div>
                  <div
                    className="section-item"
                    onClick={() =>
                      navigate(
                        routesByRole[userData.claims.role]?.screeningQuestions
                      )
                    }
                  >
                    Screening Questions
                  </div>
                </div>
              </div>
            </div>
          )}
          {accessibleFields.includes("Permissions") && (
            <div className="col-md-4 mb-3 border p-4 border rounded-2 shadow-sm">
              <div className="section">
                <h4>
                  <strong>Permissions</strong>
                </h4>
                <div className="section-content">
                  <div
                    className="section-item"
                    onClick={() =>
                      navigate(
                        routesByRole[userData.claims.role]?.userManagement
                      )
                    }
                  >
                    User Management
                  </div>
                  <div
                    className="section-item"
                    onClick={() =>
                      navigate(routesByRole[userData.claims.role]?.systemRoles)
                    }
                  >
                    System Roles
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsProfile;
