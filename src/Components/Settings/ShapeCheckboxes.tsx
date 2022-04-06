import React from "react";

import IShapeCheckboxesPropTypes from "../../interfaces/ShapeCheckboxesPropTypes";

import styles from "./styles.module.scss";

function ShapeCheckboxes({
  shapes,
  handleToggleShape,
}: IShapeCheckboxesPropTypes) {
  return (
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
  );
}

export default ShapeCheckboxes;
