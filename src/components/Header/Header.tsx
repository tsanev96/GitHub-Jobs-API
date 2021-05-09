import React, { FC, useState } from "react";
import { ToggleButton } from "../common/ToggleButton/ToggleButton";
import { HiOutlineSun, HiMoon } from "react-icons/hi";
import "./_header.scss";

interface HeaderProps {
  onChange: () => void;
}

export const Header: FC<HeaderProps> = ({ onChange }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <h3>devjobs</h3>
      </div>
      <div className="header__switch-themes">
        <HiOutlineSun />
        <ToggleButton onChange={onChange} />
        <HiMoon />
      </div>
    </header>
  );
};
