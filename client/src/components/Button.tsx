import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  children: ReactNode;
  className: string;
  id: string;
  onClick?: () => void;
}

function Button({ type, children, className, id, onClick }: ButtonProps) {
  return (
    <button className={className} id={id} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
