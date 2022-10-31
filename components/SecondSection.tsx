import React from "react";
import styles from "../styles/Home.module.css";
import GameCard from "./GameCard";

const SecondSection = () => {
  return (
    <div className={styles.SecondSection}>
      <div className={styles.checkpoint}>
        <span>[ Checkpoint reached: games and more! ]</span>
      </div>
      <div className={styles.secondHeading}>
        <span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H22C22.8284 0.5 23.5 1.17157 23.5 2V22C23.5 22.8284 22.8284 23.5 22 23.5H8.82843C8.4306 23.5 8.04907 23.342 7.76777 23.0607L0.939339 16.2322C0.658035 15.9509 0.5 15.5694 0.5 15.1716V2Z"
              stroke="currentColor"
            ></path>
          </svg>
        </span>
        GAMES AND MORE
      </div>
      <GameCard src="/assets/images/axie.jpeg" />
      <GameCard src="/assets/images/ankots.png" />
      <GameCard src="/assets/images/revoland.jpeg" />
    </div>
  );
};

export default SecondSection;
