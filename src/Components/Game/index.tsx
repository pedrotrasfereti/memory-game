import React from "react";

import styles from "./styles.module.scss";

function Game() {
  return (
    <div className={styles.Game}>
      <button
        id="blue-btn"
        type="button"
        className={`${styles.Button} ${styles.blueButton}`}
        aria-label="blue button"
      />
      <button
        id="green-btn"
        type="button"
        className={`${styles.Button} ${styles.greenButton}`}
        aria-label="green button"
      />
      <button
        id="yellow-btn"
        type="button"
        className={`${styles.Button} ${styles.yellowButton}`}
        aria-label="yellow button"
      />
      <button
        id="red-btn"
        type="button"
        className={`${styles.Button} ${styles.redButton}`}
        aria-label="red button"
      />
    </div>
  );
}

export default Game;
