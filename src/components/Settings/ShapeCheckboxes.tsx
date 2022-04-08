import React from "react";

/* icons */
import {
  BsSquareFill as SquareIcon,
  BsDiamondFill as DiamondIcon,
  BsCircleFill as CircleIcon,
  BsHeartFill as HeartIcon,
} from "react-icons/bs";

import IShapeCheckboxesPropTypes from "../../interfaces/ShapeCheckboxesPropTypes";

import styles from "./styles.module.scss";

function ShapeCheckboxes({
  shapes,
  handleToggleShape,
}: IShapeCheckboxesPropTypes) {
  const getIconClassName = (shape: string) => {
    return shapes.includes(shape)
      ? `${styles.ShapeIcon} ${styles.Checked}`
      : styles.ShapeIcon;
  };

  return (
    <div id="shape-checkbox-wrapper" className={styles.SettingWrapper}>
      <span>Include Shapes:</span>

      <button
        type="button"
        name="square-shape"
        id="square-shape"
        onClick={() => handleToggleShape("Square")}
        className={styles.ShapeCheckbox}
        aria-label="include square shape"
      >
        <SquareIcon className={getIconClassName("Square")} />
      </button>

      <button
        type="button"
        name="diamond-shape"
        id="diamond-shape"
        onClick={() => handleToggleShape("Diamond")}
        className={styles.ShapeCheckbox}
        aria-label="include diamond shape"
      >
        <DiamondIcon className={getIconClassName("Diamond")} />
      </button>

      <button
        type="button"
        name="circle-shape"
        id="circle-shape"
        onClick={() => handleToggleShape("Circle")}
        className={styles.ShapeCheckbox}
        aria-label="include circle shape"
      >
        <CircleIcon className={getIconClassName("Circle")} />
      </button>

      <button
        type="button"
        name="heart-shape"
        id="heart-shape"
        onClick={() => handleToggleShape("Heart")}
        className={styles.ShapeCheckbox}
        aria-label="include heart shape"
      >
        <HeartIcon className={getIconClassName("Heart")} />
      </button>
    </div>
  );
}

export default ShapeCheckboxes;
