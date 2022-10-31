import React from "react";
import styles from "../styles/Home.module.css";
import glitchStyles from "../styles/CheckPoint.module.scss";
import Particle from "./Particle";

const FirstSection = () => {
  return (
    <div className={styles.FirstSection}>
      <Particle />
      <div className={styles.firstSectionRight}>
        <div
          className={`${styles.mediumTxt} ${glitchStyles.glitch}`}
          data-text="AGG IS A PLAY-TO-EARN"
        >
          AGG IS A PLAY-TO-EARN
        </div>
        <div
          className={`${styles.bigTxt} ${glitchStyles.glitch}`}
          data-text="GAME GUILD"
        >
          GAME GUILD
        </div>
        <div className={styles.smTxt}>
          AGG is the first african gaming guild designed to help africans earn
          and benefit from the many opportunities of blockchain based economies.
          we are the pioneers of freedom in the metaverse.
        </div>

        <button className={styles.bigBtn}>APPLY FOR SCHOLARSHIP PROGRAM</button>
      </div>
    </div>
  );
};

export default FirstSection;
