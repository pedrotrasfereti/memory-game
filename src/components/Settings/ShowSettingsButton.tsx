import React from "react";

import { VscSettings as SettingsIcon } from "react-icons/vsc";

import IShowSettingsButtonPropTypes from "../../interfaces/ShowSettingsButtonPropTypes";

import styles from "./styles.module.scss";

function ShowSettingsButton({
  handleToggleDropdown,
  disabled,
}: IShowSettingsButtonPropTypes) {
  const ShowSettingsClassName = disabled
    ? `${styles.ToggleButton} ${styles.Disabled}`
    : styles.ToggleButton;

  return (
    <button
      type="button"
      name="show-settings"
      id="show-settings"
      className={ShowSettingsClassName}
      onClick={handleToggleDropdown}
      aria-label="toggle settings"
      disabled={disabled}
    >
      <SettingsIcon className={styles.Icon} /> Show Settings
    </button>
  );
}

export default ShowSettingsButton;
