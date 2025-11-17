"use client";
import "../../styles/button.scss";
import { FC } from "react";
interface TypePropsButton {
    size?: "Large" | "Small",
    type?: "Primary" | "Secondary"
    disabled?: boolean,
    hover?: boolean,
    children: React.ReactNode;
}
const Button: FC<TypePropsButton> = ({
    size = "Large",
    type = "Primary",
    disabled = false,
    children,
}) => {
    return (
        <button
            disabled={disabled}
            className={`btn ${size.toLowerCase()} ${type.toLowerCase()} ${disabled ? "disabled" : ""}`}
        >
            {children}
        </button>
    );
};

export default Button;