import React from "react";
import "../styles/Welcome.css";

function Welcome() {
  return (
    <div className="main-box">
      <div className="play-btn"> Play </div>
      <div className="login-btn">Login</div>
      <div className="signup-btn">Signup</div>
      <div className="statement-box">
        <h2> Going through The Enchanter's Forest</h2>
        <p> You will explore the mysterious world of legends. </p>
        <p>
          This is where your courage and strength will be tested. And where you
          will discover the value of your decisions in the journey. This is
          where your courage and strength will be tested. And where you will
          discover the value of your decisions in the journey.
        </p>
        <p className="highlight-p">Choose your path wisely, brave knight!</p>
      </div>
    </div>
  );
}

export default Welcome;
