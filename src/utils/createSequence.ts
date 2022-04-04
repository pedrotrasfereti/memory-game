import IGameButtonPropTypes from "../interfaces/GameButtonPropTypes";

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
