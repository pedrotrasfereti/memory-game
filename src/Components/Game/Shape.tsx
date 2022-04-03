import React from "react";

import { FaHeart as HeartIcon } from "react-icons/fa";

import styles from "./styles.module.scss";

interface ShapeButtonPropTypes {
  shape: string;
  color: string;
}

function ShapeButton({ shape, color }: ShapeButtonPropTypes) {
  const colorMap = {
    red: "#f01699",
    green: "#10ef78",
    yellow: "#e1ed0c",
    blue: "#5271FF",
  };

  const shapeColor = colorMap[color as keyof typeof colorMap];

  return shape !== "Heart" ? (
    <button
      type="button"
      className={`${styles.Button} ${styles[shape]}`}
      style={{ backgroundColor: shapeColor }}
      aria-label={`${shape} and ${color} button`}
    />
  ) : (
    <button
      type="button"
      className={styles.HeartButton}
      aria-label={`${shape} and ${color} button`}
    >
      <HeartIcon
        className={`${styles.Button} ${styles.Heart}`}
        style={{ color: shapeColor }}
      />
    </button>
  );
}

export default ShapeButton;
