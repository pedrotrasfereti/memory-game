import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import styles from "./styles.module.scss";

function Score() {
  const { best, score } = useSelector((state: RootState) => state.game);

  return (
    <div className={styles.Score}>
      <span className={styles.Label}>
        Best: <span>{best}</span>
      </span>
      <span className={styles.Label}>
        Score: <span>{score}</span>
      </span>
    </div>
  );
}

export default Score;
