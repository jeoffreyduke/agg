import React from "react";
import styles from "../styles/CheckPoint.module.scss";

const CheckPoint = () => {
  return (
    <div className={styles.checkpoint}>
      <span>
        [{" "}
        <span
          className={styles.glitch}
          data-text="Checkpoint reached: games and more!"
        >
          Checkpoint reached: games and more!
        </span>{" "}
        ]
      </span>
    </div>
  );
};

export default CheckPoint;
