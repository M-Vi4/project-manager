import "./CompanyDetails.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
export const CompanyDetails = ({ company }) => {
  
  return (
    <div className="CompanyDetails">
      <div className="companyImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <div className="companyName">
        <span>{company?.name}</span>
      </div>
      <div className="companyStatus">
        <hr />
        <div>
          <div className="status">
            <span>{company?.employees.length}</span>
            <span>Employees</span>
          </div>
          <div className="status">
            <span>{company?.projects.length}</span>
            <span>Projects</span>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};
