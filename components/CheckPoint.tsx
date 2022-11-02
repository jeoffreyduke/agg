import React from "react";
import styles from "../styles/CheckPoint.module.scss";

interface CheckPointProps {
  checkpoint: string;
}

const CheckPoint = ({ checkpoint }: CheckPointProps) => {
  let msg = `Checkpoint reached: ${checkpoint}!`;

  return (
    <div className={styles.checkpoint}>
      <span>
        [{" "}
        <span className={styles.glitch} data-text={msg}>
          {msg}
        </span>{" "}
        ]
      </span>
    </div>
  );
};

export default CheckPoint;
