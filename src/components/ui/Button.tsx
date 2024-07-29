import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: string;
  onClick: () => void;
  id?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <button
        className={styles.button}
        onClick={props.onClick}
        id={props.id}>
        {props.children}
      </button>
    </>
  );
};

export default Button;
