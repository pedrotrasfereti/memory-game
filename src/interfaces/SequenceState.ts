import IGameButtonPropTypes from "./GameButtonPropTypes";

export default interface ISequenceState {
  value: IGameButtonPropTypes[];
  isAnimating: boolean;
}
