import "./home.css";

import Curve1 from "../../assets/Curve 1.svg";
import Curve2 from "../../assets/Curve 2.svg";

import Rec1 from "../../assets/Rectangle 1.svg";
import Rec2 from "../../assets/Rectangle 2.svg";
import Rec3 from "../../assets/Rectangle 3.svg";
import Rec4 from "../../assets/Rectangle 4.svg";

import ColorfulLogo from "../../assets/logo-colorful.svg";

const Home = () => {
  return (
    <div id="home">
      <div id="homeLayer1">
        <div id="slogan">
          <h1 style={{ fontSize: "50px" }}>
            We know what you <br /> are looking for
          </h1>
          <p style={{ fontSize: "20px" }}>
            We have +10 years experience working in <br /> Europe
          </p>
        </div>
        <div id="allShapes">
          <div id="allCurves">
            <img id="curve1" src={Curve1} alt="React Logo" />
            <br />
            <img id="curve2" src={Curve2} alt="React Logo" />
          </div>
          <div id="allRectangles">
            <div id="rectangle1" className="Rectangle">
              <img className="RectangleImg" src={Rec1} alt="React Logo" />
              <div id="header1" className="RectangleHeader">
                <h5 className="RecHeaders">Web Application Development</h5>
                <p id="paragraph1">
                  Rectangle Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Omnis, quae.
                </p>
              </div>
            </div>
            <div id="rectangle2" className="Rectangle">
              <img className="RectangleImg" src={Rec2} alt="React Logo" />
              <div id="header2" className="RectangleHeader">
                <h5 className="RecHeaders">Web Application Development</h5>
                <p id="paragraph2">
                  Rectangle Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Omnis, quae.
                </p>
              </div>
            </div>
            <div id="rectangle3" className="Rectangle">
              <img className="RectangleImg" src={Rec3} alt="React Logo" />
              <div id="header3" className="RectangleHeader">
                <h5 className="RecHeaders">Web Application Development</h5>
                <p id="paragraph3">
                  Rectangle Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Omnis, quae.
                </p>
              </div>
            </div>
            <div id="rectangle4" className="Rectangle">
              <img className="RectangleImg" src={Rec4} alt="React Logo" />
              <div id="header4" className="RectangleHeader">
                <h5 className="RecHeaders">Web Application Development</h5>
                <p id="paragraph4">
                  Rectangle Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Omnis, quae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-2">
        <div className="row d-flex justify-content-around mb-2">
          <div className="col-lg-3 col-md-8 mb-2">
            <p id="mannersHeader">
              We have a talented team with professional web
              designers,developers,and project managers worked in a harmonious
              manner To achieve the best results in your business at aresonable
              cost.
            </p>
          </div>
          <div className="col-lg-6  col-md-8">
            <p id="manners">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              inventore magni. Suscipit, quas blanditiis. Suscipit, modi, velit
              adipisci minima hic voluptatibus in, quia ratione vero accusamus
              doloribus! Cum, inventore ad. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Magni dolorem doloribus error vel
              enim consectetur repellendus eligendi pariatur deserunt quaerat.
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-end">
          <div></div>
          <div className="col-lg-2 col-md-3  d-flex justify-content-end">
            <img id="coloredLogo" src={ColorfulLogo} alt="Colored Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
