import React, { useEffect, createRef } from "react";
import { useDispatch, useSelector } from "react-redux";

/* icons */
import {
  BsSquareFill as SquareIcon,
  BsDiamondFill as DiamondIcon,
  BsCircleFill as CircleIcon,
  BsHeartFill as HeartIcon,
} from "react-icons/bs";

import styles from "./styles.module.scss";

import { addClicked } from "../../redux/features/gameSlice";

import IGameButtonPropTypes from "../../interfaces/GameButtonPropTypes";
import { RootState } from "../../redux/store";

function Button({ id, shape, color, isAnimating }: IGameButtonPropTypes) {
  const dispatch = useDispatch();

  const clickAnimation = useSelector(
    (state: RootState) => state.settings.clickAnimation
  );

  const buttonRef = createRef<HTMLButtonElement>();

  /* add animate class to button */
  const animate = () => {
    const node = buttonRef.current;

    if (node) {
      node.classList.toggle(styles.Animate);
      node.classList.toggle(styles.Playing);
      node.disabled = true;

      const removeDelay = 600;

      setTimeout(() => {
        node.classList.toggle(styles.Animate);
        node.classList.toggle(styles.Playing);
        node.disabled = false;
      }, removeDelay);
    }
  };

  /* listen to changes made to isAnimating by game */
  useEffect(() => {
    if (isAnimating) animate();
  }, [isAnimating]);

  /* handle click */
  const handleClick = () => {
    const node = buttonRef.current as unknown as HTMLButtonElement;

    if (clickAnimation) {
      // animate before adding to clicked
      animate();

      setTimeout(() => {
        // annotate button id to "clicked" array
        dispatch(addClicked(node.id));
      }, 600);
    } else {
      dispatch(addClicked(node.id));
    }
  };

  /* styles - get icon */
  const getShapeIcon = () => {
    const colorMap = {
      blue: "#3D8DCF",
      green: "#36B93C",
      red: "#CF3D5D",
      yellow: "#CFAA3D",
    };

    const iconStyle = { color: colorMap[color as keyof typeof colorMap] };

    const iconMap = {
      Square: <SquareIcon style={iconStyle} className={styles.Icon} />,
      Diamond: <DiamondIcon style={iconStyle} className={styles.Icon} />,
      Circle: <CircleIcon style={iconStyle} className={styles.Icon} />,
      Heart: <HeartIcon style={iconStyle} className={styles.Icon} />,
    };

    return iconMap[shape as keyof typeof iconMap];
  };

  return (
    <button
      id={id}
      ref={buttonRef}
      type="button"
      onClick={handleClick}
      className={styles.Button}
      aria-label={id.replaceAll("-", " ")}
    >
      {getShapeIcon()}
    </button>
  );
}

export default Button;
