import { ChangeEvent, ReactNode } from "react";
interface InputProps {
  className: string;
  type: "text" | "password" | "submit";
  placeholder?: string;
  value?: string;
  id?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
  onFocus?: () => void;
}

function Input({
  type,
  className,
  value,
  id,
  onChange,
  onSubmit,
  onFocus,
  placeholder = "",
}: InputProps) {
  return (
    <input
      type={type}
      className={className}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      id={id}
      onSubmit={onSubmit}
      onFocus={onFocus}
    />
  );
}

export default Input;
