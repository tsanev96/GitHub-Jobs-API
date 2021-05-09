import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./_button.scss";

interface ButtonProps {
  text: string;
  type: "primary" | "secondary" | "dark";
  pathname?: string;
}

export const Button: FC<ButtonProps> = ({ text, type, pathname }) => {
  return (
    <>
      {pathname ? (
        <Link to={pathname}>{text}</Link>
      ) : (
        <button className={`btn btn__${type}`}>{text}</button>
      )}
    </>
  );
};
