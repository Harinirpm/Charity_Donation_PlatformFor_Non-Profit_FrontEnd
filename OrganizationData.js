import "./Organization.css";
import Organization from "./Organization";
function OrganizationData({ className, para }) {
  return (
    <>
      <div className={className}>
        <div className="orgtext1">
          <h2>{para.heading}</h2>
          <br />
          <p>{para.text}</p>
        </div>
      </div>
    </>
  );
}

export default OrganizationData;
