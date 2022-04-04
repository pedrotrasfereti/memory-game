import React, { useEffect, createRef } from "react";

import { FaHeart as HeartIcon } from "react-icons/fa";

import styles from "./styles.module.scss";

import IGameButtonPropTypes from "../../interfaces/GameButtonPropTypes";

function Button({ id, shape, color, isAnimating }: IGameButtonPropTypes) {
  const buttonRef = createRef<HTMLButtonElement>();

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
  const handleToggleAnimation = () => {
    const node = buttonRef.current;

    if (node) {
      const removeDelay = 1000;

      node.classList.toggle(styles.Animate);

      setTimeout(() => {
        node.classList.toggle(styles.Animate);
      }, removeDelay);
    }
  };

  useEffect(() => {
    if (isAnimating) {
      handleToggleAnimation();
    }
  }, [isAnimating]);

  return (
    <button
      id={id}
      ref={buttonRef}
      type="button"
      className={btnClassName}
      style={btnStyle}
      onClick={handleToggleAnimation}
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
