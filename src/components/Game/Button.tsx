import React, { useEffect, createRef } from "react";
import { useDispatch } from "react-redux";

import { FaHeart as HeartIcon } from "react-icons/fa";

import styles from "./styles.module.scss";

import { addClicked } from "../../redux/features/gameSlice";

import IGameButtonPropTypes from "../../interfaces/GameButtonPropTypes";

function Button({ id, shape, color, isAnimating }: IGameButtonPropTypes) {
  const dispatch = useDispatch();

  const buttonRef = createRef<HTMLButtonElement>();

  /* add animate class to button */
  const animate = () => {
    const node = buttonRef.current;

    if (node) {
      const removeDelay = 1000;

      node.classList.toggle(styles.Animate);

      setTimeout(() => {
        node.classList.toggle(styles.Animate);
      }, removeDelay);
    }
  };

  /* listen to changes made to isAnimating by game */
  useEffect(() => {
    if (isAnimating) animate();
  }, [isAnimating]);

  /* handle click */
  const handleClick = () => {
    if (buttonRef.current) {
      // annotate button id to "clicked" array
      dispatch(addClicked(buttonRef.current.id));

      // animate button
      animate();
    }
  };

  /* styles - button className */
  const colorMap = {
    blue: "#3D8DCF",
    green: "#36B93C",
    red: "#CF3D5D",
    yellow: "#CFAA3D",
  };

  const shapeColor = colorMap[color as keyof typeof colorMap];

  const isHeart = shape === "Heart";

  const btnStyle = isHeart ? {} : { backgroundColor: shapeColor };

  const btnClassName = isHeart
    ? styles.HeartButton
    : `${styles.Button} ${styles[shape]}`;

  return (
    <button
      id={id}
      ref={buttonRef}
      type="button"
      className={btnClassName}
      style={btnStyle}
      onClick={handleClick}
      aria-label={id.replaceAll("-", " ")}
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
