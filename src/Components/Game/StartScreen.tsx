import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { toggleInProgress } from "../../app/features/gameSlice";

import styles from "./styles.module.scss";

function StartScreen() {
  const dispatch = useDispatch();

  const handleToggleInProgress = useCallback(() => {
    dispatch(toggleInProgress());
  }, []);

  return (
    <div id="start-screen" className={styles.StartScreen}>
      <button
        type="button"
        className={styles.StartButton}
        onClick={handleToggleInProgress}
        aria-label="start button"
      >
        Start!
      </button>
    </div>
  );
}

export default StartScreen;
