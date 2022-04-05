import IGameButtonPropTypes from "../interfaces/GameButtonPropTypes";

/**
 * Takes in a set of options and creates an array of custom button
 * props
 *
 * @param shapes - The available set of different shapes.
 * @param quantity - The quantity of buttons that will be created.
 * @returns An array of button prop objects.
 */
const createButtons = (
  shapes: string[],
  quantity: number
): IGameButtonPropTypes[] => {
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

  return buttons;
};

export default createButtons;
