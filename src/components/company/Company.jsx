import { BaggageClaim } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Title from "../dashboard/Title";
import DashboardInput from "../dashboard/DashboardInput";

const Company = () => {
  const companies = [
    {
      name: "Alice Johnson",
      companyName: "TechSoft Solutions",
      email: "alice.johnson@techsoft.com",
      phoneNumber: "+91-9876543210",
      username: "aliceJ",
      password: "alice@123",
    },
    {
      name: "David Singh",
      companyName: "Innovative Tech",
      email: "david.singh@innovativetech.com",
      phoneNumber: "+91-9123456789",
      username: "davidS",
      password: "david@innovative2023",
    },
    {
      name: "Priya Patel",
      companyName: "Green Energy Corp",
      email: "priya.patel@greenenergy.com",
      phoneNumber: "+91-9098765432",
      username: "priyaP",
      password: "priya@green123",
    },
    {
      name: "Suresh Menon",
      companyName: "Future Finance",
      email: "suresh.menon@futurefinance.com",
      phoneNumber: "+91-9087654321",
      username: "sureshM",
      password: "future@finance2024",
    },
    {
      name: "Neha Sharma",
      companyName: "HealthFirst Pvt Ltd",
      email: "neha.sharma@healthfirst.com",
      phoneNumber: "+91-9076543210",
      username: "nehaS",
      password: "neha@healthfirst",
    },
    {
      name: "Ravi Kumar",
      companyName: "EcomNext",
      email: "ravi.kumar@ecomnext.com",
      phoneNumber: "+91-9065432109",
      username: "raviK",
      password: "ravi@ecomnext2023",
    },
    {
      name: "Meera Nair",
      companyName: "Smart Solutions",
      email: "meera.nair@smartsolutions.com",
      phoneNumber: "+91-9054321098",
      username: "meeraN",
      password: "meera@smart2024",
    },
    {
      name: "Arjun Desai",
      companyName: "UrbanTech Innovations",
      email: "arjun.desai@urbantech.com",
      phoneNumber: "+91-9043210987",
      username: "arjunD",
      password: "arjun@urbantech123",
    },
    {
      name: "Ritika Kapoor",
      companyName: "CyberSecure",
      email: "ritika.kapoor@cybersecure.com",
      phoneNumber: "+91-9032109876",
      username: "ritikaK",
      password: "ritika@cyber2023",
    },
    {
      name: "Karan Verma",
      companyName: "EduSmart",
      email: "karan.verma@edusmart.com",
      phoneNumber: "+91-9021098765",
      username: "karanV",
      password: "karan@edu2024",
    },
  ];
  
  const navigate = useNavigate();

  return (
    <div className="me-md-3">
      <div>
        <Title icon={BaggageClaim} title={"Company"} />
      </div>
      <div className="w-75 mx-auto mt-4">
        <DashboardInput />
      </div>
      <div className="d-flex gap-4 w-100">
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
            className="btn btn-outline-dark"
            onClick={() => navigate("create")}
          >
            Create Company
          </button>
        </div>
      </div>
      <JobTable jobs={companies} />
    </div>
  );
};
export function JobTable({ jobs = [] }) {
  const navigate = useNavigate();
  // Job data array

  return (
    <div className="">
      <table className="table table-striped table-hover border">
        <thead className="table-light">
          <tr>
            {/* name: "Alice Johnson", companyName: "TechSoft Solutions", email:
            "alice.johnson@techsoft.com", phoneNumber: "+91-9876543210",
            username: "aliceJ", password: "alice@123", */}
            <th scope="col">name</th>
            <th scope="col">companyName</th>
            <th scope="col">email</th>
            <th scope="col">phoneNumber</th>
            <th scope="col">username</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the jobs array */}
          {jobs?.map((job, index) => (
            <tr
              key={index}
              className="cursor-pointer"
              //   onClick={() => navigate("job-profile/" + job?.title)}
            >
              <td>{job?.name}</td>
              <td>{job?.companyName}</td>
              <td>{job?.email}</td>

              <td>{job?.phoneNumber}</td>
              <td>{job?.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Company;
