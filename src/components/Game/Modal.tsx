import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleInProgress } from "../../app/features/gameSlice";
import { RootState } from "../../app/store";

import styles from "./styles.module.scss";

function Modal() {
  const dispatch = useDispatch();

  const { gameResult } = useSelector((state: RootState) => state.game);

  const handleToggleInProgress = useCallback(() => {
    dispatch(toggleInProgress());
  }, []);

  return (
    <div id="game-modal" className={styles.Modal}>
      <button
        type="button"
        className={styles.Button}
        onClick={handleToggleInProgress}
        aria-label="start or retry button"
      >
        {gameResult === "player lost" ? "Retry" : "Start!"}
      </button>
    </div>
  );
}

export default Modal;
