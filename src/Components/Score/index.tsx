import React from "react";

import styles from "./styles.module.scss";

function Score() {
  return (
    <div className={styles.Score}>
      <span className={styles.Label}>
        Best: <span>0</span>
      </span>
      <span className={styles.Label}>
        Score: <span>0</span>
      </span>
    </div>
  );
}

export default Score;
