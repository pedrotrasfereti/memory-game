import IGameButtonPropTypes from "../interfaces/GameButtonPropTypes";

/**
 * Creates a random game sequence by shuffling the elements
 * of a buttons array; elements can be repeated.
 *
 * @param elements - The array of elements to be shuffled.
 * @param sequenceLength - The size of the sequence array.
 * @returns An array of buttons in random order.
 */
const createSequence = (
  elements: IGameButtonPropTypes[],
  sequenceLength: number
) => {
  const sequence = [];

  for (let i = 0; i < sequenceLength; i += 1) {
    const elementIdx = Math.floor(Math.random() * elements.length);
    sequence[i] = elements[elementIdx];
  }

  return sequence;
};

export default createSequence;
