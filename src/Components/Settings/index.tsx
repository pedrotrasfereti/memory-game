import React, { useCallback, useState } from "react";

import { VscSettings as SettingsIcon } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { addShape, removeShape } from "../../app/features/shapesSlice";
import { RootState } from "../../app/store";

import styles from "./styles.module.scss";

function Settings() {
  const dispatch = useDispatch();
  const shapes = useSelector((state: RootState) => state.shapes.value);

  const [dropdown, setDropdown] = useState(false);

  const handleToggleDropdown = useCallback(() => {
    setDropdown((prevState) => !prevState);
  }, []);

  const handleToggleShape = (shapeName: string) => {
    if (shapes.includes(shapeName) && shapes.length >= 2) {
      // remove shape
      dispatch(removeShape(shapeName));
    } else {
      // add shape
      dispatch(addShape(shapeName));
    }
  };

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
            onClick={() => handleToggleShape("Square")}
            className={
              shapes.includes("Square")
                ? `${styles.SquareShape} ${styles.ShapeChecked}`
                : styles.SquareShape
            }
          />
          <input
            type="checkbox"
            name="diamond shape"
            id="diamond-shape"
            onClick={() => handleToggleShape("Diamond")}
            className={
              shapes.includes("Diamond")
                ? `${styles.DiamondShape} ${styles.ShapeChecked}`
                : styles.DiamondShape
            }
          />
          <input
            type="checkbox"
            name="circle shape"
            id="circle-shape"
            onClick={() => handleToggleShape("Circle")}
            className={
              shapes.includes("Circle")
                ? `${styles.CircleShape} ${styles.ShapeChecked}`
                : styles.CircleShape
            }
          />
          <input
            type="checkbox"
            name="heart shape"
            id="heart-shape"
            onClick={() => handleToggleShape("Heart")}
            className={
              shapes.includes("Heart")
                ? `${styles.HeartShape} ${styles.ShapeChecked}`
                : styles.HeartShape
            }
          />
        </div>

        <div id="quantity-select-wrapper" className={styles.SettingWrapper}>
          <span>Quantity of shapes:</span>
          <select
            name="quantity"
            id="quantity"
            className={styles.Select}
            defaultValue="4"
          >
            <option value="4">4</option>
            <option value="4">6</option>
            <option value="9">9</option>
          </select>
        </div>

        <div id="difficulty-select-wrapper" className={styles.SettingWrapper}>
          <span>Difficulty:</span>
          <select
            name="quantity"
            id="quantity"
            className={styles.Select}
            defaultValue="Easy"
          >
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
          <SettingsIcon className={styles.Icon} /> Hide Settings
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
      <SettingsIcon className={styles.Icon} /> Show Settings
    </button>
  );
}

export default Settings;
