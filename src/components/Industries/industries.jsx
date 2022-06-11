import "./industries.css";

import Icon1 from "../../assets/icon1.svg";
import Icon2 from "../../assets/icon2.svg";
import Icon3 from "../../assets/icon3.svg";
import Icon4 from "../../assets/icon4.svg";

const Industries = () => {
  return (
    <div id="industries" className="m-0 pt-3 pb-5">
      <div className="row m-0 pt-5 pb-5 industryHeader">
        <p>Why Choose Appittuneity?</p>
      </div>
      <div className="row m-0 pt-5 d-flex justify-content-around pb-5">
        <div className="col-lg-2 col-md-5 col-sm-10 industriesCards pr-3 pl-3 mb-5">
          <div className=" row pb-5 pt-5  d-flex justify-content-center">
            <img className="iconImg" src={Icon1} alt="React Logo" />
          </div>
          <div className="row pt-5 pb-3">
            <p className="imgDescription">Planing and clarity of stratiges</p>
          </div>
        </div>
        <div className="col-lg-2 col-md-5 col-sm-10 industriesCards pr-3 pl-3 mb-5">
          <div className="row d-flex justify-content-around pb-4">
            <div className="col-2">
              <img
                id="setting"
                className=" pb-4 pt-5"
                src={Icon2}
                alt="React Logo"
              />
            </div>
            <div className="imgDescription col-6 pb-4 pt-4">
              Our software has strong operational capability
            </div>
          </div>
          <div className="row">
            <div>
              <p id="settingIconH">
                We have more than 10 years of experience in building mobile and
                web applications so that they integrate with the most common
                software systems such as ERP, CRM, and our software easily deals
                with cloud computing.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-5 col-sm-10 industriesCards pr-3 pl-3 mb-5">
          <div className=" row pb-5 pt-5  d-flex justify-content-center">
            <img className="iconImg" src={Icon3} alt="React Logo" />
          </div>
          <div className="row pt-5 pb-3">
            <p className="imgDescription">
              Cumulative experience enables fast implementation and lower cost
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-md-5 col-sm-10 industriesCards pr-3 pl-3 mb-5">
          <div className=" row pb-5 pt-5  d-flex justify-content-center">
            <img className="iconImg" src={Icon4} alt="React Logo" />
          </div>
          <div className="row pt-5 pb-3">
            <p className="imgDescription">Long experience in industries</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
