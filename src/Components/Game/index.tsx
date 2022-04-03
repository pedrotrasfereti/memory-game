import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import styles from "./styles.module.scss";

import { RootState } from "../../app/store";

import Shape from "./Shape";
import StartScreen from "./StartScreen";

function Game() {
  const shapes = useSelector((state: RootState) => state.shapes.value);
  const quantity = useSelector((state: RootState) => state.quantity.value);
  const game = useSelector((state: RootState) => state.game);

  const colors = ["red", "green", "yellow", "blue"];
  const elements: JSX.Element[] = [];

  for (let i = 0; i < quantity; i += 1) {
    /* define shape dynamically */
    let shape = shapes[i];

    const shapesSize = shapes.length;

    // look for a way to simplify this!!
    // q: what is the number im using to multiply shapes.length?
    if (shapesSize === 1) {
      const [firstElement] = shapes;
      shape = firstElement;
    } else if (i >= shapesSize * 4) {
      shape = shapes[i - shapesSize * 4];
    } else if (i >= shapesSize * 3) {
      shape = shapes[i - shapesSize * 3];
    } else if (i >= shapesSize * 2) {
      shape = shapes[i - shapesSize * 2];
    } else if (i >= shapesSize * 1) {
      shape = shapes[i - shapesSize * 1];
    }

    /* define color dynamically */
    let color = colors[i];

    const colorsSize = 4;

    if (i >= colorsSize * 2) {
      color = colors[i - colorsSize * 2];
    } else if (i >= colorsSize * 1) {
      color = colors[i - colorsSize * 1];
    }

    elements.push(<Shape key={uuid()} shape={shape} color={color} />);
  }

  /* grid containers for each occasion */
  const gridTemplatesMap = {
    4: styles["Grid--2C-by-2R"],
    9: styles["Grid--3C-by-3R"],
  };

  const gridTemplate =
    gridTemplatesMap[quantity as keyof typeof gridTemplatesMap];

  return (
    <div className={`${styles.Game} ${gridTemplate}`}>
      {game.inProgress || <StartScreen />}
      {elements.map((element) => element)}
    </div>
  );
}

export default Game;
