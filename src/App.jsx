/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import axios from "axios";
import DashboardLayout from "./pages/DashboardLayout";
import Jobs from "./components/dashboard/Jobs";
import { JobProfile } from "./components/dashboard/JobProfile";
import ApplicantProfile from "./components/dashboard/ApplicantProfile";
import AddCandidates from "./components/candidates/AddCandidates";
import NotFound from "./components/not-found/NotFound";
import Home from "./components/Home";
import User from "./components/user/User";
import Company from "./components/company/Company";
import Create from "./components/company/Create";
import Managers from "./components/manager/Managers";
import CreateManager from "./components/manager/CreateManager";
import Employee from "./components/employee/Employee";
import CreateEmployee from "./components/employee/CreateEmployee";
import Candidates from "./components/candidates/Candidates";
import CreateCandidates from "./components/candidates/CreateCandidates";
import CreateJob from "./components/dashboard/CreateJob";

axios.defaults.baseURL = "http://localhost:8081/api/";
// export const baseUrl = "http://localhost:3001";
const App = () => {
  function ProtectedRoute({ children, allowedRoles = "" }) {
    const location = useLocation();
    const role = localStorage.getItem("role");
    if (!role || !allowedRoles.includes(role)) {
      return <Navigate to="/not-found" state={{ from: location }} />;
    }
    return children;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/superadmin/*"
          element={
            <ProtectedRoute allowedRoles={["SUPER_ADMIN"]}>
              <Routes>
                <Route path="/" element={<DashboardLayout />}>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/jobs" element={<Jobs />} />
                  <Route path="/users" element={<User />} />
                  <Route path="/company" element={<Company />} />
                  <Route path="/company/create" element={<Create />} />
                  <Route
                    path="/jobs/job-profile/:id"
                    element={<JobProfile />}
                  />
                  <Route
                    path="/jobs/job-profile/:id/job-applicants/:id"
                    element={<ApplicantProfile />}
                  />
                </Route>
              </Routes>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <Routes>
                <Route path="/" element={<DashboardLayout />}>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/jobs" element={<Jobs />} />
                  <Route path="/users" element={<User />} />
                  <Route path="/managers" element={<Managers />} />
                  <Route path="/managers/create" element={<CreateManager />} />
                  <Route
                    path="/jobs/job-profile/:id"
                    element={<JobProfile />}
                  />
                  <Route
                    path="/jobs/job-profile/:id/job-applicants/:id"
                    element={<ApplicantProfile />}
                  />
                </Route>
              </Routes>
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee/*"
          element={
            <ProtectedRoute allowedRoles={["EMPLOYEE"]}>
              <Routes>
                <Route path="/" element={<DashboardLayout />}>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/users" element={<User />} />
                  <Route path="/candidates" element={<Candidates />} />
                  <Route
                    path="/candidates/create"
                    element={<CreateCandidates />}
                  />
                  <Route
                    path="/jobs/job-profile/:id"
                    element={<JobProfile />}
                  />
                  <Route
                    path="/jobs/job-profile/:id/job-applicants/:id"
                    element={<ApplicantProfile />}
                  />
                </Route>
              </Routes>
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/*"
          element={
            <ProtectedRoute allowedRoles={["USER"]}>
              <Routes>
                <Route path="/" element={<DashboardLayout />}>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/jobs" element={<Jobs />} />
                  <Route path="/users" element={<User />} />
                  <Route
                    path="/jobs/job-profile/:id"
                    element={<JobProfile />}
                  />
                  <Route
                    path="/jobs/job-profile/:id/job-applicants/:id"
                    element={<ApplicantProfile />}
                  />
                </Route>
              </Routes>
            </ProtectedRoute>
          }
        />
        <Route
          path="/recruitment_manager/*"
          element={
            <ProtectedRoute allowedRoles={["RECRUITMENT_MANAGER"]}>
              <Routes>
                <Route path="/" element={<DashboardLayout />}>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/jobs" element={<Jobs />} />
                  <Route path="/jobs/create-jobs" element={<CreateJob />} />
                  <Route path="/users" element={<User />} />
                  <Route path="/employee" element={<Employee />} />
                  <Route path="/employee/create" element={<CreateEmployee />} />
                  <Route
                    path="/jobs/job-profile/:id"
                    element={<JobProfile />}
                  />
                  <Route
                    path="/jobs/job-profile/:id/job-applicants/:id"
                    element={<ApplicantProfile />}
                  />
                </Route>
              </Routes>
            </ProtectedRoute>
          }
        />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
