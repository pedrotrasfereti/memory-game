import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { VscSettings as SettingsIcon } from "react-icons/vsc";

import { setQuantity } from "../../app/features/quantitySlice";
import { addShape, removeShape } from "../../app/features/shapesSlice";
import { setDifficulty } from "../../app/features/difficultySlice";
import { RootState } from "../../app/store";

import styles from "./styles.module.scss";

function Settings() {
  const [dropdown, setDropdown] = useState(false);

  const dispatch = useDispatch();
  const shapes = useSelector((state: RootState) => state.shapes.value);
  const quantity = useSelector((state: RootState) => state.quantity.value);
  const difficulty = useSelector((state: RootState) => state.difficulty.value);

  const handleToggleDropdown = useCallback(() => {
    setDropdown((prevState) => !prevState);
  }, []);

  const handleToggleShape = (shapeName: string) => {
    if (shapes.includes(shapeName) && shapes.length >= 2) {
      // remove shape
      dispatch(removeShape(shapeName));
    } else if (!shapes.includes(shapeName)) {
      // add shape
      dispatch(addShape(shapeName));
    }
  };

  const handleSetQuantity = (newQty: number) => {
    if (newQty !== quantity) {
      dispatch(setQuantity(newQty));
    }
  };

  const handleSetDifficulty = (newDifficulty: string) => {
    if (newDifficulty !== difficulty) {
      dispatch(setDifficulty(newDifficulty));
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
            value={quantity.toString()}
            onChange={(e) => handleSetQuantity(Number(e.target.value))}
          >
            <option value="4">4</option>
            <option value="9">9</option>
          </select>
        </div>

        <div id="difficulty-select-wrapper" className={styles.SettingWrapper}>
          <span>Difficulty:</span>
          <select
            name="quantity"
            id="quantity"
            className={styles.Select}
            value={difficulty}
            onChange={(e) => handleSetDifficulty(e.target.value)}
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
