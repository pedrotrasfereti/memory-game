import React from "react";

import { v4 as uuid } from "uuid";

import { useSelector } from "react-redux";
import styles from "./styles.module.scss";

import Shape from "./Shape";
import { RootState } from "../../app/store";

function Game() {
  const shapes = useSelector((state: RootState) => state.shapes.value);
  const quantity = useSelector((state: RootState) => state.quantity.value);

  const colors = ["red", "green", "yellow", "blue"];
  const elements: JSX.Element[] = [];

  for (let i = 0; i < quantity; i += 1) {
    /* define shape dynamically */
    let shape = shapes[i];
    const shapesSize = shapes.length;

    if (shapesSize === 1) {
      const [firstElement] = shapes;
      shape = firstElement;
    } else if (i >= shapesSize * 2) {
      shape = shapes[i - shapesSize * 2];
    } else if (i >= shapesSize) {
      shape = shapes[i - shapesSize];
    }

    /* define color dynamically */
    let color = colors[i];
    const colorsSize = 4;
    if (i >= colorsSize * 2) {
      color = colors[i - colorsSize * 2];
    } else if (i >= colorsSize) {
      color = colors[i - colorsSize];
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
      {elements.map((element) => element)}
    </div>
  );
}

export default Game;
