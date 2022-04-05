import IGameButtonPropTypes from "../interfaces/GameButtonPropTypes";

/**
 * Checks if an array of clicked buttons and the game sequence
 * buttons match. Returns `true` if the answer is yes; `false` if no.
 *
 * @param sequence - An array of the game sequence buttons.
 * @param clickedIds - An array of the clicked button ids.
 * @returns A boolean representing the game result (won/lost).
 */
const matchButtons = (
  sequence: IGameButtonPropTypes[],
  clickedIds: string[]
) => {
  let playerWon = true;

  sequence.forEach((el, index) => {
    /* clicked button corresponding to the sequence button */
    const matchId = clickedIds[index];

    if (matchId !== el.id) playerWon = false;
  });

  return playerWon;
};

export default matchButtons;
