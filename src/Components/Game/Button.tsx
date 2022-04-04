import React, { useEffect } from "react";

import { FaHeart as HeartIcon } from "react-icons/fa";

import styles from "./styles.module.scss";

import IGameButtonPropTypes from "../../interfaces/GameButtonPropTypes";

function Button({ id, shape, color, isAnimating }: IGameButtonPropTypes) {
  const colorMap = {
    red: "#f01699",
    green: "#10ef78",
    yellow: "#e1ed0c",
    blue: "#5271FF",
  };

  const shapeColor = colorMap[color as keyof typeof colorMap];

  /* JSX element properties */
  const isHeart = shape === "Heart";

  const btnStyle = isHeart ? {} : { backgroundColor: shapeColor };

  const btnClassName = isHeart
    ? styles.HeartButton
    : `${styles.Button} ${styles[shape]}`;

  /* animate button */
  const animate = () => {
    console.log("Hey, I'm animating!!!");
  };

  useEffect(() => {
    if (isAnimating) animate();
  }, []);

  return (
    <button
      id={id}
      type="button"
      className={btnClassName}
      style={btnStyle}
      aria-label={`${shape} and ${color} button`}
    >
      {isHeart && (
        <HeartIcon
          className={`${styles.Button} ${styles.Heart}`}
          style={{ color: shapeColor }}
        />
      )}
    </button>
  );
}

export default Button;
