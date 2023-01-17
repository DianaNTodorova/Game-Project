<<<<<<< Updated upstream
=======
import React from 'react';
//import "./Adventure.css";
import Stage from './Stage';
import { useState } from 'react';

//************images***************
import knight from '../images/knight.png';
import merchant from '../images/merchant.png';
import village from '../images/village.png';
import monster from '../images/monster.png';
import prisoner from '../images/prisoner.png';
import castle from '../images/castle.png';
import congrates from '../images/congrates.png';
//************images***************

const Adventure = () => {
  const [currentStage, setCurrentStage] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [playButtonVisible, setPlayButtonVisible] = useState(true);

  // Function for to start game!
  const startGame = () => {
    setCurrentStage('start');
    setModalIsOpen(true);
    setPlayButtonVisible(false);
  };

  // Stages/Levels of the game.
  const stages = {
    start: {
      image: <img src={knight} alt="knight" />,
      statement : `A Knight is traveling through the enchantress forest when he suddenly sees a treasure in the path.`,
      options: [
        { btnLabel: 'Take the treasure', nextStage: 'key1' },
        { btnLabel: 'Leave the treasure', nextStage: 'key2' },
      ],
    },
    key1: {
      image: <img src={merchant} alt="merchant" />,
      statement: 'The Knight come across a merchant that offers him to trade.',
      options: [
        { btnLabel: 'Trade for a sword', nextStage: 'key3' },
        { btnLabel: 'Trade for a shield', nextStage: 'key4' },
        { btnLabel: 'Ignore the merchant', nextStage: 'key5' },
      ],
    },
    key3: {
      image: <img src={village} alt="village" />,
      statement:
        'After leaving the merchant you start to feel tired and stumble upon a small town next to a dangerous looking castle.',
      options: [
        { btnLabel: 'Explore the castle', nextStage: 'key6' },
        { btnLabel: 'Continue to the village', nextStage: 'key7' },
      ],
    },
    key6: {
      image: <img src={monster} alt="monster" />,
      statement:
        'Wile exploring the castle you come across a horrible monster in your path.',
      options: [
        { btnLabel: 'Attack with sword', nextStage: 'key8' },
        { btnLabel: 'Run', nextStage: 'key9' },
      ],
    },
    key8: {
      image: <img src={congrates} alt="congrates" />,
      statement:
        '**Congratulations**<br><br>YOU WIN THE GAME! <br><br>You Killed the Monster and Saved your life.',
      options: [{ btnLabel: 'Try Again', nextStage: 'start' }],
    },
    key9: {
      image: <img src={monster} alt="monster" />,
      statement:
        'You are so tired that you fall asleep while exploring the castle and are killed by a terrible monster while you were sleeping. <br><br>YOU LOSE THE GAME!',
      options: [{ btnLabel: 'Try Again', nextStage: 'start' }],
    },
    key7: {
      image: <img src={prisoner} alt="prisoner" />,
      statement:
        'Without any money to buy a room you break into the nearest inn and fall asleep. The owner of the inn finds you and has the town quard lock you in a cell. <br><br>YOU LOSE THE GAME!',
      options: [{ btnLabel: 'Try Again', nextStage: 'start' }],
    },
    key4: {
      image: <img src={prisoner} alt="prisoner" />,
      statement:
        'Without any money to buy a room you break into the nearest inn and fall asleep.The owner of the inn finds you and has the town quard lock you in a cell. <br><br>YOU LOSE THEGAME!',
      options: [{ btnLabel: 'Try Again', nextStage: 'start' }],
    },
    key5: {
      image: <img src={village} alt="village" />,
      statement:
        'After leavning the merchant you start to feel tired and stumble upon a small town next to a dangerous looking castle.',
      options: [
        { btnLabel: 'Explore the castle', nextStage: 'key10' },
        { btnLabel: 'Continue to the village', nextStage: 'key11' },
      ],
    },
    key10: {
      image: <img src={castle} alt="castle" />,
      statement:
        'You are so tired that you fall asleep while exploring the castle and are killed by a terrible monster while you were sleeping. <br>YOU LOSE THE GAME!',
      options: [{ btnLabel: 'Try Again', nextStage: 'start' }],
    },
    key11: {
      image: <img src={prisoner} alt="prisoner" />,
      statement:
        'Without any money to buy a room you break into the nearest inn and fall asleep. The owner of the inn finds you and has the town quard lock you in a cell. <br>YOU LOSE THE GAME!',
      options: [{ btnLabel: 'Try Again', nextStage: 'start' }],
    },
    key2: {
      image: <img src={prisoner} alt="prisoner" />,
      statement:
        'Without any money to buy a room you break into the nearest inn and fall asleep. The owner of the inn finds you and has the town quard lock you in a cell. <br>YOU LOSE THE GAME!',
      options: [{ btnLabel: 'Try Again', nextStage: 'start' }],
    },
  };

  const handleOptionSelect = (nextStage) => {
    setCurrentStage(nextStage);
  };

  return (
    <>
      {playButtonVisible && (
        <button className="play-button text-white" onClick={startGame}>
          Play
        </button>
      )}

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
>>>>>>> Stashed changes
