import React from "react";

import IQuantitySelectPropTypes from "../../interfaces/QuantitySelectPropTypes";

import styles from "./styles.module.scss";

function QuantitySelect({
  quantity,
  handleSetQuantity,
}: IQuantitySelectPropTypes) {
  return (
    <div id="quantity-select-wrapper" className={styles.SettingWrapper}>
      <span>Quantity of shapes:</span>
      <select
        name="select-quantity"
        id="select-quantity"
        className={styles.Select}
        value={quantity.toString()}
        onChange={(e) => handleSetQuantity(Number(e.target.value))}
      >
        <option value="4">4</option>
        <option value="9">9</option>
      </select>
    </div>
  );
}

export default QuantitySelect;
