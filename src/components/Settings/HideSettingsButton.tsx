import React from "react";

import { VscSettings as SettingsIcon } from "react-icons/vsc";

import IHideSettingsButtonPropTypes from "../../interfaces/HideSettingsButtonPropTypes";

import styles from "./styles.module.scss";

function HideSettingsButton({
  handleToggleDropdown,
}: IHideSettingsButtonPropTypes) {
  return (
    <button
      type="button"
      name="hide-settings"
      id="hide-settings"
      className={styles.ToggleButton}
      onClick={handleToggleDropdown}
      aria-label="toggle settings"
    >
      <SettingsIcon className={styles.Icon} /> Hide Settings
    </button>
  );
}

export default HideSettingsButton;
