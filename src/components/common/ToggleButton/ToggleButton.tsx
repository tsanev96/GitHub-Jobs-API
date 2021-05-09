import React, { FC } from "react";
import "./_toggle-button.scss";

interface PropsToggleButton {
  onChange: () => void;
}

export const ToggleButton: FC<PropsToggleButton> = ({ onChange }) => {
  return (
    <label onChange={onChange} className="toggle-button">
      <input type="checkbox" />
      <span className="toggle-button__slider" />
    </label>
  );
};