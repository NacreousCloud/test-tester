import { css } from "@emotion/css";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: any;
  variant?: "transparent";
}

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={`${props.className} ${css`
        ${props.variant === "transparent"
          ? { "background-color": "#00000000", "border-color": "#00000000" }
          : {}}
      `}`}
    ></button>
  );
};

export default Button;
