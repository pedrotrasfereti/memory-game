import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import styles from "./styles.module.scss";

import { RootState } from "../../app/store";

import Button from "./Button";
import StartScreen from "./StartScreen";

import createSequence from "../../helpers/createSequence";
import createButtons from "../../helpers/createButtons";

import IGameButtonPropTypes from "../../interfaces/GameButtonPropTypes";
import ISequenceState from "../../interfaces/SequenceState";
import ICountdownState from "../../interfaces/CountdownState";

const sequenceInitialState: ISequenceState = {
  value: [],
  isAnimating: false,
};

const countdownInitialState: ICountdownState = {
  status: false,
  counter: 0,
};

function Game() {
  /* game elements and status */
  const [buttons, setButtons] = useState<IGameButtonPropTypes[]>([]);

  const [sequence, setSequence] =
    useState<ISequenceState>(sequenceInitialState);

  const [countdown, setCountdown] = useState<ICountdownState>(
    countdownInitialState
  );

  /* game settings */
  const shapes = useSelector((state: RootState) => state.shapes.value);
  const quantity = useSelector((state: RootState) => state.quantity.value);
  const difficulty = useSelector((state: RootState) => state.difficulty.value);
  const { inProgress } = useSelector((state: RootState) => state.game);

  /* create game buttons */
  useEffect(() => {
    setButtons(createButtons(shapes, quantity));
  }, [shapes, quantity, difficulty]);

  /* animate buttons in sequence */
  const clearAnimation = (
    index: number,
    element: IGameButtonPropTypes,
    delay: number
  ) => {
    setTimeout(() => {
      const targetIndex = buttons.findIndex(
        (button) => button.id === element.id
      );

      const targetBtn = buttons[targetIndex];

      if (targetBtn) {
        const updatedButtons = [...buttons]; // create copy buttons
        const updatedBtn = { ...targetBtn }; // create copy of target button
        updatedBtn.isAnimating = false; // change isAnimating value
        updatedButtons[targetIndex] = updatedBtn; // replace prev button with new
        setButtons(updatedButtons); // finally, update buttons

        if (index === sequence.value.length - 1) {
          setSequence((prevState) => ({
            ...prevState,
            isAnimating: false,
          }));
        }
      }
    }, delay);
  };

  const animate = (element: IGameButtonPropTypes, delay: number) => {
    setTimeout(() => {
      const targetIndex = buttons.findIndex(
        (button) => button.id === element.id
      );

      const targetBtn = buttons[targetIndex];

      if (targetBtn) {
        const updatedButtons = [...buttons]; // create copy buttons
        const updatedBtn = { ...targetBtn }; // create copy of target button
        updatedBtn.isAnimating = true; // change isAnimating value
        updatedButtons[targetIndex] = updatedBtn; // replace prev button with new
        setButtons(updatedButtons); // finally, update buttons
      }
    }, delay);
  };

  const animateButtons = () => {
    sequence.value.forEach((element, index) => {
      /*
        Animations must be 1 second apart of each other, allowing the
        player to properly identify the buttons.
      */
      const delayAnimate = index * 1000;
      animate(element, delayAnimate);

      /*
        In order for all animations to work properly, the "animate" style
        must be cleared once the button has finished animating, which is
        approximately the delay time.
      */
      const delayClear = index * 1000 + 800;
      clearAnimation(index, element, delayClear);
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
      setSequence((prevState) => ({
        ...prevState,
        value: createSequence(buttons, sequenceLength),
      }));
    }
  }, [buttons]);

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
      setSequence((prevState) => ({ ...prevState, isAnimating: true }));
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

  /* styles - allow/disallow user clicks */
  const gameClassName = sequence.isAnimating
    ? `${styles.Game} ${gridTemplate} ${styles.Playing}`
    : `${styles.Game} ${gridTemplate}`;

  return (
    <div className={gameClassName}>
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
