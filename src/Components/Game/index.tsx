import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import styles from "./styles.module.scss";

import { RootState } from "../../app/store";

import Button from "./Button";
import StartScreen from "./StartScreen";

import IGameButtonPropTypes from "../../interfaces/GameButtonPropTypes";
import createSequence from "../../utils/createSequence";

function Game() {
  const [countdown, setCountdown] = useState({ status: false, counter: 0 });
  const [sequence, setSequence] = useState<IGameButtonPropTypes[]>([]);

  const shapes = useSelector((state: RootState) => state.shapes.value);
  const quantity = useSelector((state: RootState) => state.quantity.value);
  const difficulty = useSelector((state: RootState) => state.difficulty.value);
  const { inProgress } = useSelector((state: RootState) => state.game);

  /* create buttons */
  const buttons: IGameButtonPropTypes[] = [];

  for (let index = 0; index < quantity; index += 1) {
    /* define shape dynamically */
    let shape = shapes[index];

    const shapesSize = shapes.length;

    // look for a way to simplify this!!
    // tip: what is the number im using to multiply shapes.length?
    if (shapesSize === 1) {
      const [firstElement] = shapes;
      shape = firstElement;
    } else if (index >= shapesSize * 4) {
      shape = shapes[index - shapesSize * 4];
    } else if (index >= shapesSize * 3) {
      shape = shapes[index - shapesSize * 3];
    } else if (index >= shapesSize * 2) {
      shape = shapes[index - shapesSize * 2];
    } else if (index >= shapesSize * 1) {
      shape = shapes[index - shapesSize * 1];
    }

    /* define color dynamically */
    const colors = ["red", "green", "yellow", "blue"];

    let color = colors[index];

    const colorsSize = 4;

    if (index >= colorsSize * 2) {
      color = colors[index - colorsSize * 2];
    } else if (index >= colorsSize * 1) {
      color = colors[index - colorsSize * 1];
    }

    buttons.push({
      id: `${color}-${shape.toLowerCase()}-${index}`,
      color,
      shape,
      isAnimating: false,
    });
  }

  /* animate buttons in sequence */
  const animate = (sequenceEl: IGameButtonPropTypes, delay: number) => {
    setTimeout(() => {
      const target = buttons.find((btn) => btn.id === sequenceEl.id);
      if (target) {
        target.isAnimating = true;
        console.log(target);
      }
    }, delay);
  };

  const animateButtons = () => {
    sequence.forEach((sequenceEl, index) => {
      const delay = index * 1000;
      animate(sequenceEl, delay);
    });
  };

  /* create game sequence */
  useEffect(() => {
    const sequenceLengthMap = {
      Easy: 4,
      Normal: 6,
      Hard: 8,
    };

    const sequenceLength =
      sequenceLengthMap[difficulty as keyof typeof sequenceLengthMap];

    if (buttons.length === quantity) {
      setSequence(createSequence(buttons, sequenceLength));
    }
  }, [inProgress, shapes, quantity, difficulty]);

  /* countdown */
  const handleCountdown = () => {
    setCountdown({ status: true, counter: 3 });

    const delay = 1000;

    setTimeout(() => {
      setCountdown((prevState) => ({
        ...prevState,
        counter: prevState.counter - 1,
      }));
    }, delay);

    setTimeout(() => {
      setCountdown((prevState) => ({
        ...prevState,
        counter: prevState.counter - 1,
      }));
    }, delay * 2);

    setTimeout(() => {
      setCountdown({ status: false, counter: 0 });
      animateButtons();
    }, delay * 3);
  };

  useEffect(() => {
    if (inProgress) handleCountdown();
  }, [inProgress]);

  /* styles - grid containers for each occasion */
  const gridTemplatesMap = {
    4: styles["Grid--2C-by-2R"],
    9: styles["Grid--3C-by-3R"],
  };

  const gridTemplate =
    gridTemplatesMap[quantity as keyof typeof gridTemplatesMap];

  return (
    <div className={`${styles.Game} ${gridTemplate}`}>
      {countdown.status && (
        <div id="counter-wrapper" className={styles.CounterWrapper}>
          <div className={styles.Counter}>
            <span>{countdown.counter}</span>
          </div>
        </div>
      )}
      {inProgress || <StartScreen />}
      {buttons.map(({ id, shape, color, isAnimating }) => (
        <Button
          id={id}
          key={uuid()}
          shape={shape}
          color={color}
          isAnimating={isAnimating}
        />
      ))}
    </div>
  );
}

export default Game;
