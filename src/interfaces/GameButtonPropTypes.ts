import { ButtonHTMLAttributes } from "react";

export default interface IGameButtonPropTypes
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  shape: string;
  color: string;
  isAnimating: boolean;
}
