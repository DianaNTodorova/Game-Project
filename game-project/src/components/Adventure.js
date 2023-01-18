import React from "react";
import "../styles/Adventure.css";
import Stage from "./Stage";
import { useState } from "react";

//************images***************
import congrats from "../images/congrats.webp";
import merchant from "../images/merchant.png";
import redmonster from "../images/redmonster.png";
import prison from "../images/prison.jpeg";
import castle from "../images/castle.png";
import treasure from "../images/treasure.png";
import shield from "../images/shield.png";
//************images***************

const Adventure = () => {
  const [currentStage, setCurrentStage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [playButtonVisible, setPlayButtonVisible] = useState(true);

  // Function for to start game!
  const startGame = () => {
    setCurrentStage("start");
    setModalIsOpen(true);
    setPlayButtonVisible(false);
  };

  // Stages/Levels of the game.
  const stages = {
    start: {
      image: <img src={treasure} alt="treasure" />,
      statement: `A Knight is traveling through the Enchanted Forest when suddenly he see a chest full of treasures in the path. </br> Brave knight, choose what to do.`,
      options: [
        { btnLabel: "Take treasure", nextStage: "key1" },
        { btnLabel: "Leave treasure", nextStage: "key2" },
      ],
    },
    key1: {
      image: <img src={merchant} alt="merchant" />,
      statement:
        "You come across a merchant who offers to trade. </br> </br> Choose your weapon.",
      options: [
        { btnLabel: "Sword", nextStage: "key3" },
        { btnLabel: "Shield", nextStage: "key4" },
        { btnLabel: "IGNORE", nextStage: "key5" },
      ],
    },
    key2: {
      image: <img src={prison} alt="imprisoned" />,
      statement:
        "With no money to rent a room, you break into an inn. The owner is enraged and sent you to a cell. <br><br><strong>YOU LOSE THE GAME! </strong>",
      options: [{ btnLabel: "Try Again", nextStage: "start" }],
    },
    key3: {
      image: <img src={castle} alt="castle" />,
      statement:
        "After leaving the merchant you stumble upon an abandoned castle. </br> </br> Choose what to do.",
      options: [
        { btnLabel: "Explore", nextStage: "key6" },
        { btnLabel: "Ignore and Continue", nextStage: "key7" },
      ],
    },
    key4: {
      image: <img src={shield} alt="shield" />,
      statement:
        "The shield can protect you but you cannot fight back againts the monster. <br><br>YOU LOSE THE GAME!",
      options: [{ btnLabel: "Try Again", nextStage: "start" }],
    },
    key5: {
      image: <img src={castle} alt="village" />,
      statement:
        "After leaving the merchant you continued through the forest and stumble upon an abandoned castle. </br> </br> Choose what to do.",
      options: [
        { btnLabel: "Explore", nextStage: "key10" },
        { btnLabel: "Continue to the village", nextStage: "key11" },
      ],
    },
    key6: {
      image: <img src={redmonster} alt="monster" />,
      statement:
        "Overcomed by curiosity your long stay in the castle awakened the monster!",
      options: [
        { btnLabel: "Defend with sword", nextStage: "key8" },
        { btnLabel: "Run!", nextStage: "key9" },
      ],
    },
    key7: {
      image: <img src={prison} alt="imprisoned" />,
      statement:
        "With no money to rent a room, you break into an inn. The owner is enraged and sent you to a cell. <br><br><strong>YOU LOSE THE GAME! </strong>",
    },
    key8: {
      image: <img src={congrats} alt="congrats" />,
      statement:
        "Congratulations!<br><br>YOU WON! <br><br>You Killed the Monster and Saved your life.",
      options: [{ btnLabel: "Try Again", nextStage: "start" }],
    },
    key9: {
      image: <img src={redmonster} alt="monster" />,
      statement:
        "The monster overran and overpowered you. <br><br>YOU LOSE THE GAME!",
      options: [{ btnLabel: "Try Again", nextStage: "start" }],
    },

    key10: {
      image: <img src={redmonster} alt="monster" />,
      statement:
        "After a long time without rest .You let down your guard. The monster easily defeated you. <br> YOU LOSE THE GAME!",
      options: [{ btnLabel: "Try Again", nextStage: "start" }],
    },
    key11: {
      image: <img src={prison} alt="imprisoned" />,
      statement:
        "Without any money to rent a room you break into the nearest inn and fall asleep. The owner  was enraged and out you in a cell.<br><br><strong>YOU LOSE THE GAME! </strong>",
      options: [{ btnLabel: "Try Again", nextStage: "start" }],
    },
  };

  const handleOptionSelect = (nextStage) => {
    setCurrentStage(nextStage);
  };

  return (
    <>
      <div className="btn-container">
        {playButtonVisible && (
          <button className="play-button adventure-btn" onClick={startGame}>
            Play
          </button>
        )}
      </div>

      {modalIsOpen && (
        <div>
          {stages[currentStage] && (
            <Stage
              Stage={stages[currentStage]}
              handleOptionSelect={handleOptionSelect}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Adventure;
