import React from "react";
import { Link } from "react-router-dom";
import "../styles/Welcome.css";

function Welcome() {
  return (
    <div className="main-box">
      <div className="header d-flex ">
        <div className="left-btn"></div>
        <div className="right-btn">
          <Link to="/Login">
            <div className="login-btn btn ">Login</div>
          </Link>
          <Link to="/Signup">
            <div className="signup-btn btn ">Signup</div>
          </Link>
        </div>
      </div>
      <div className="wrapper-statement-box">
        <div className="statement-box card">
          <div className="card-text">
            <h2> Going through The Enchanter's Forest</h2>

            <p> You will explore the mysterious world of legends. </p>
            <p>
              This is where your courage and strength will be tested. Where you
              will discover the value of your decisions in the journey.
            </p>
            <p className="highlight-p">
              Choose your path wisely, brave knight!
            </p>
          </div>
          <div className="play-btn-container">
            <Link to="/Adventure">
              <div className="welcome-play-btn play-btn btn ">Play</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
