import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../redux/store";

import {
  addShape,
  removeShape,
  setQuantity,
  setDifficulty,
} from "../../redux/features/settingsSlice";

import styles from "./styles.module.scss";

import ISettingsPropTypes from "../../interfaces/SettingsPropTypes";

import ShapeCheckboxes from "./ShapeCheckboxes";
import QuantitySelect from "./QuantitySelect";
import DifficultySelect from "./DifficultySelect";
import ShowSettingsButton from "./ShowSettingsButton";
import HideSettingsButton from "./HideSettingsButton";
import EnableClickAnimationCheckbox from "./EnableClickAnimationCheckbox";

function Settings({ disabled }: ISettingsPropTypes) {
  const dispatch = useDispatch();

  const [dropdown, setDropdown] = useState(false);

  const shapes = useSelector((state: RootState) => state.settings.shapes);
  const quantity = useSelector((state: RootState) => state.settings.quantity);
  const difficulty = useSelector(
    (state: RootState) => state.settings.difficulty
  );

  const handleToggleDropdown = () => {
    setDropdown((prevState) => !prevState);
  };

  const handleToggleShape = (shapeName: string) => {
    if (shapes.includes(shapeName) && shapes.length >= 2) {
      // remove shape
      dispatch(removeShape(shapeName));
    } else if (!shapes.includes(shapeName)) {
      // add shape
      dispatch(addShape(shapeName));
    }
  };

  const handleSetQuantity = (newQty: number) => {
    if (newQty !== quantity) {
      dispatch(setQuantity(newQty));
    }
  };

  const handleSetDifficulty = (newDifficulty: string) => {
    if (newDifficulty !== difficulty) {
      dispatch(setDifficulty(newDifficulty));
    }
  };

  useEffect(() => {
    if (disabled) setDropdown(false);
  }, [disabled]);

  return dropdown ? (
    <div className={styles.Settings}>
      <h2>Settings</h2>

      <hr />

      <div className={styles.Container}>
        <ShapeCheckboxes
          shapes={shapes}
          handleToggleShape={handleToggleShape}
        />

        <QuantitySelect
          quantity={quantity}
          handleSetQuantity={handleSetQuantity}
        />

        <DifficultySelect
          difficulty={difficulty}
          handleSetDifficulty={handleSetDifficulty}
        />

        <EnableClickAnimationCheckbox />

        <HideSettingsButton handleToggleDropdown={handleToggleDropdown} />
      </div>
    </div>
  ) : (
    <ShowSettingsButton
      handleToggleDropdown={handleToggleDropdown}
      disabled={disabled}
    />
  );
}

export default Settings;
