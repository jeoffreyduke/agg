import React from "react";
import styles from "../styles/CheckPoint.module.scss";

interface CheckPointProps {
  checkpoint: string;
}

const CheckPoint = ({ checkpoint }: CheckPointProps) => {
  return (
    <div className={styles.checkpoint}>
      <span>
        [{" "}
        <span
          className={styles.glitch}
          data-text="Checkpoint reached: games and more!"
        >
          Checkpoint reached: {checkpoint}!
        </span>{" "}
        ]
      </span>
    </div>
  );
};

export default CheckPoint;
