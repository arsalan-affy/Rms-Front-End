import { Search } from "lucide-react";

const DashboardInput = ({ onChange = () => {} ,onClick}) => {
  return (
    <div className=" dashboard-input w-100 overflow-hidden border mx-auto  d-flex align-items-center justify-content-center px-4">
      <input
        className=" w-100 border-1 p-2 border-0 "
        placeholder="Search"
        onChange={onchange}
      />
      <Search />
    </div>
  );
};

export const JobsSelect = () => {
  return (
    <select className="form-select custom-select rounded-1 " id="customSelect">
      <option selected>Open this select menu</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
  );
};

export default DashboardInput;
