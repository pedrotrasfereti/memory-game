import React from "react";

import IDifficultySelectPropTypes from "../../interfaces/DifficultySelectPropTypes";

import styles from "./styles.module.scss";

function DifficultySelect({
  difficulty,
  handleSetDifficulty,
}: IDifficultySelectPropTypes) {
  return (
    <div id="difficulty-select-wrapper" className={styles.SettingWrapper}>
      <span>Difficulty:</span>
      <select
        name="select-difficulty"
        id="select-difficulty"
        className={styles.Select}
        value={difficulty}
        onChange={(e) => handleSetDifficulty(e.target.value)}
      >
        <option value="Easy">Easy</option>
        <option value="Normal">Normal</option>
        <option value="Hard">Hard</option>
      </select>
    </div>
  );
}

export default DifficultySelect;
