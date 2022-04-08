import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../redux/store";
import { toggleClickAnimation } from "../../redux/features/settingsSlice";

import styles from "./styles.module.scss";

function EnableClickAnimationCheckbox() {
  const dispatch = useDispatch();

  const clickAnimation = useSelector(
    (state: RootState) => state.settings.clickAnimation
  );

  const handleClick = () => {
    dispatch(toggleClickAnimation());
  };

  return (
    <div id="click-animation-wrapper" className={styles.SettingWrapper}>
      <span>Enable Click Animation:</span>
      <input
        type="checkbox"
        name="enable-click-animation"
        id="enable-click-animation"
        onClick={handleClick}
        checked={clickAnimation}
      />
    </div>
  );
}

export default EnableClickAnimationCheckbox;
