import React from "react";
//import "./Stage.css";

const Stage = ({ Stage, handleOptionSelect }) => {
  return (
    <div className="main-box">

      <div className="statement-box">

        <div className="d-flex align-items-center gap-3">
          
          {/***image of each stage/level start***/}
          <div className="card border border-1 rounded-3 bg-transparent d-flex align-items-center">
            {Stage.image} 
          </div>
          {/***image of each stage/level End***/}

          {/***statement each stage/level start***/}
          <h6 style={{lineHeight: "1.5rem"}}>
            {
              <div 
                dangerouslySetInnerHTML={{ __html: Stage.statement}} //To break line where needed
              />
            } 
          </h6>
          {/***statement each stage/level End***/}

        </div>

      </div>

      {/***Buttons start***/}
      <div className="container d-flex justify-content-center gap-2 align-items-center pt-3">
        {Stage.options.map((option, index) => (
          <button className="btn" key={index} onClick={() => handleOptionSelect(option.nextStage)}>
            {option.btnLabel}
          </button>
        ))}
      </div>
      {/***Buttons End***/}

    </div>
  );
};

export default Stage;

  