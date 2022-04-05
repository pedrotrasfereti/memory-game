import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import styles from "./styles.module.scss";

import { RootState } from "../../app/store";

import Button from "./Button";
import Modal from "./Modal";

import createSequence from "../../helpers/createSequence";
import createButtons from "../../helpers/createButtons";

import IGameButtonPropTypes from "../../interfaces/GameButtonPropTypes";
import ISequenceState from "../../interfaces/SequenceState";
import ICountdownState from "../../interfaces/CountdownState";
import matchButtons from "../../helpers/matchButtons";

import {
  addScore,
  clearClicked,
  clearScore,
  setBest,
  setGameResult,
  toggleInProgress,
} from "../../app/features/gameSlice";

const sequenceInitialState: ISequenceState = {
  value: [],
  isAnimating: false,
};

const countdownInitialState: ICountdownState = {
  status: false,
  counter: 0,
};

function Game() {
  const dispatch = useDispatch();

  /* game elements and status */
  const [buttons, setButtons] = useState<IGameButtonPropTypes[]>([]);

  const [sequence, setSequence] =
    useState<ISequenceState>(sequenceInitialState);

  const [countdown, setCountdown] = useState<ICountdownState>(
    countdownInitialState
  );

  const { inProgress, clickedIds, score, best } = useSelector(
    (state: RootState) => state.game
  );

  /* game settings */
  const shapes = useSelector((state: RootState) => state.shapes.value);
  const quantity = useSelector((state: RootState) => state.quantity.value);
  const difficulty = useSelector((state: RootState) => state.difficulty.value);

  /* 6. animate buttons in sequence */
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
            isAnimating: false, // allow user clicks
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
        const updatedButtons = [...buttons]; // create copy of buttons
        const updatedBtn = { ...targetBtn }; // create copy of target button
        updatedBtn.isAnimating = true; // change isAnimating value
        updatedButtons[targetIndex] = updatedBtn; // replace prev button with new
        setButtons(updatedButtons); // finally, update buttons for animation
      }
    }, delay);
  };

  const animateButtons = () => {
    sequence.value.forEach((element, index) => {
      /*
          Animations must be 1 second apart of each other, giving the
          player enough time to memorize the sequence.
        */
      const delayAnimate = index * 1000;
      animate(element, delayAnimate);

      /*
          In order for all animations to work properly, the "animate" style
          must be cleared once the button has finished animating, which is
          approximately the delay value.
        */
      const delayClear = index * 1000 + 800;
      clearAnimation(index, element, delayClear);
    });
  };

  /* 4. countdown */
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
      setCountdown({ status: false, counter: 0 }); // stop count

      setSequence((prevState) => ({
        ...prevState,
        isAnimating: true, // trigger animation
      }));
    }, delay * 3);
  };

  /* 3. create game sequence */
  const createGameSequence = () => {
    const sequenceLengthMap = {
      Easy: 4,
      Normal: 6,
      Hard: 8,
    };

    const sequenceLength =
      sequenceLengthMap[difficulty as keyof typeof sequenceLengthMap];

    const newSequence = createSequence(buttons, sequenceLength);

    setSequence({ value: newSequence, isAnimating: false });
    handleCountdown();
  };

  /* 1. create game buttons */
  useEffect(() => {
    const newButtons = createButtons(shapes, quantity);
    setButtons(newButtons);
  }, [shapes, quantity]);

  /* 2. check if player started the game */
  useEffect(() => {
    if (inProgress && buttons.length) createGameSequence();
  }, [inProgress]);

  /* 5. check if sequence buttons should animate */
  useEffect(() => {
    if (sequence.isAnimating) animateButtons();
  }, [sequence]);

  /*
    7. when player clicks are equal to the sequence length, check
    the game result
  */
  useEffect(() => {
    if (
      sequence.value.length > 0 &&
      clickedIds.length === sequence.value.length
    ) {
      /* reset clicked array */
      dispatch(clearClicked());

      const playerWon = matchButtons(sequence.value, clickedIds);
      const gameResult = playerWon ? "player won" : "player lost";

      dispatch(setGameResult(gameResult));

      if (playerWon) {
        dispatch(addScore(100));
        createGameSequence();
      } else {
        if (score > best) dispatch(setBest(score));
        dispatch(clearScore());
        dispatch(toggleInProgress());
      }
    }
  }, [clickedIds]);

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
      {inProgress || <Modal />}
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
