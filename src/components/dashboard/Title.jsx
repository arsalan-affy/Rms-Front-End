/* eslint-disable react/prop-types */
const Title = ({ icon, title }) => {
  const Icon = icon;

  return (
    <div className="w-100 border-bottom p-2 px-3  d-flex align-items-center justify-content-start gap-2 fw-bolder fs-3 text-primary mt-md-0 ">
      <Icon className={`dashboard-links cursor-pointer`} /> {title}
    </div>
  );
};

export default Title;
