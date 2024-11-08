import {
  BaggageClaim,
  Factory,
  Grid2x2Check,
  Grid2x2CheckIcon,
  LogOut,
  ShieldMinus,
  User2,
  UserIcon,
  Users,
  BriefcaseBusiness,
} from "lucide-react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaJoint } from "react-icons/fa6";
const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const token = localStorage.getItem("token");
  // const userInfo = token && jwtDecode(token);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };
  const navLinks = {
    SUPER_ADMIN: [
      {
        path: "/superadmin",
        name: "Dashboard",
        icon: (
          <Grid2x2Check
            className={` icon-size cursor-pointer ${
              location.pathname === "/superadmin" ? "text-yellow" : "text-white"
            } `}
          />
        ),
      },
      {
        path: "/superadmin/users",
        name: "School",
        icon: (
          <User2
            className={` icon-size cursor-pointer ${
              location.pathname === "/superadmin/users"
                ? "text-yellow"
                : "text-white"
            } `}
          />
        ),
      },
      {
        path: "/superadmin/jobs",
        name: "School",
        icon: (
          <BaggageClaim
            className={` icon-size cursor-pointer ${
              location.pathname === "/superadmin/jobs"
                ? "text-yellow"
                : "text-white"
            } `}
          />
        ),
      },
      {
        path: "/superadmin/company",
        name: "School",
        icon: (
          <Factory
            className={` icon-size cursor-pointer ${
              location.pathname === "/superadmin/company"
                ? "text-yellow"
                : "text-white"
            } `}
          />
        ),
      },
    ],
    ADMIN: [
      {
        path: "/admin",
        name: "Dashboard",
        icon: <Grid2x2CheckIcon className="icon-size" />,
      },
      {
        path: "/admin/sub-admin",
        name: "Sub-admin",
        icon: <UserIcon className="icon-size" />,
      },
      {
        path: "/admin/managers",
        name: "Managers",
        icon: <Users className="icon-size" />,
      },
      {
        path: "/admin/jobs",
        name: "Jobs",
        icon: <BriefcaseBusiness className="icon-size" />,
      },
    ],
    RECRUITMENT_MANAGER: [
      {
        path: "/recruitment_manager",
        name: "Dashboard",
        icon: <ShieldMinus className="icon-size" />,
      },
      {
        path: "/recruitment_manager/jobs",
        name: "Jobs",
        icon: <FaJoint className="icon-size" />,
      },
      {
        path: "/recruitment_manager/employee",
        name: "Employee",
        icon: <Users className="icon-size" />,
      },
    ],
    EMPLOYEE: [
      {
        path: "/employee",
        name: "Dashboard",
        icon: <Grid2x2CheckIcon className="icon-size" />,
      },
      {
        path: "/employee/jobs",
        name: "Jobs",
        icon: <BriefcaseBusiness className="icon-size" />,
      },
      {
        path: "/employee/candidates",
        name: "Candidates",
        icon: <Users className="icon-size" />,
      },
    ],
  };
  const role = localStorage.getItem("role");

  const linksToDisplay = role ? navLinks[role] : navLinks[0];
  // const linksToDisplay = navLinks[role];
  console.log(linksToDisplay);

  return (
    <div className="vh-100 d-md-flex w-100 ">
      <div className="dashboard-nav d-flex align-items-center flex-column  d-md-block me-md-3 py-md-5 d-none d-md-block  position-relative position-fixed h-100  ">
        <div
          className="logo fs-4  w-100 mb-2 text-center text-white cursor-pointer fw-semibold fs-4"
          onClick={() => navigate("/")}
        >
          Logo
        </div>
        <ul className="nav flex-column mb-auto w-100 ">
          {linksToDisplay.map((link, index) => (
            <li
              key={index}
              className="nav-item mb-2 d-flex align-items-center justify-content-center mt-3"
            >
              <Link
                to={link.path}
                className={`fs-6 d-flex align-items-center justify-content-start  text-decoration-none ${
                  location.pathname === link.path ? "text-yellow" : "text-white"
                }`}
              >
                <span
                  className={`${
                    location.pathname === link.path
                      ? "text-yellow"
                      : "text-lime"
                  }`}
                >
                  {link.icon}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className=" w-100 " style={{ position: "absolute", bottom: 40 }}>
          <button
            className={"text-yellow btn text-center w-100"}
            onClick={handleLogout} // Close dropdown when clicked
          >
            <LogOut />
          </button>
        </div>
      </div>
      <div className="w-100 dashboard-pages">
        <div className="dashboard-nav p-3 d-flex align-items-center justify-content-between d-md-none d-block">
          <div className="fs-3 text-white">Logo</div>
          <div className="d-flex gap-4 align-items-center justify-content-between">
            <div>
              <ul className="nav d-flex gap-4 mb-auto w-100 ">
                {linksToDisplay.map((link, index) => (
                  <li
                    key={index}
                    className="nav-item mb-2 d-flex align-items-center justify-content-center mt-3"
                  >
                    <Link
                      to={link.path}
                      className={`fs-6 d-flex align-items-center justify-content-start  text-decoration-none ${
                        location.pathname === link.path
                          ? "text-yellow"
                          : "text-white"
                      }`}
                    >
                      <span
                        className={`${
                          location.pathname === link.path
                            ? "text-yellow"
                            : "text-lime"
                        }`}
                      >
                        {link.icon}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <button
                className="btn btn-light w-100 text-start text-danger"
                onClick={handleLogout} // Close dropdown when clicked
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
