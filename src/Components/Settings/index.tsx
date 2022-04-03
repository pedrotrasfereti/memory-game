import React, { useCallback, useState } from "react";

import { VscSettings } from "react-icons/vsc";

import styles from "./styles.module.scss";

function Settings() {
  const [dropdown, setDropdown] = useState(false);

  const handleToggleDropdown = useCallback(() => {
    setDropdown((prevState) => !prevState);
  }, []);

  return dropdown ? (
    <div className={styles.Settings}>
      <h2>Settings</h2>

      <hr />

      <div className={styles.Container}>
        <div id="shape-checkbox-wrapper" className={styles.SettingWrapper}>
          <span>Include Shapes:</span>
          <input
            type="checkbox"
            name="square shape"
            id="square-shape"
            className={styles.SquareShape}
          />
          <input
            type="checkbox"
            name="diamond shape"
            id="diamond-shape"
            className={styles.DiamondShape}
          />
          <input
            type="checkbox"
            name="circle shape"
            id="circle-shape"
            className={styles.CircleShape}
          />
          <input
            type="checkbox"
            name="heart shape"
            id="heart-shape"
            className={styles.HeartShape}
          />
        </div>

        <div id="quantity-select-wrapper" className={styles.SettingWrapper}>
          <span>Quantity of shapes:</span>
          <select name="quantity" id="quantity" className={styles.Select}>
            <option value="4">4</option>
            <option value="4">6</option>
            <option value="9">9</option>
          </select>
        </div>

        <div id="difficulty-select-wrapper" className={styles.SettingWrapper}>
          <span>Difficulty:</span>
          <select name="quantity" id="quantity" className={styles.Select}>
            <option value="Easy">Easy</option>
            <option value="Normal">Normal</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <button
          type="button"
          className={styles.ToggleButton}
          onClick={handleToggleDropdown}
          aria-label="toggle settings"
        >
          <VscSettings className={styles.Icon} /> Hide Settings
        </button>
      </div>
    </div>
  ) : (
    <button
      type="button"
      className={styles.ToggleButton}
      onClick={handleToggleDropdown}
      aria-label="toggle settings"
    >
      <VscSettings className={styles.Icon} /> Show Settings
    </button>
  );
}

export default Settings;
