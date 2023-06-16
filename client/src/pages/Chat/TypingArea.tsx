import Input from "../../components/Input";
import Button from "../../components/Button";
import { Children, FormEvent, ReactNode } from "react";

interface TypingAreaProps {
  children: ReactNode;
}

function TypingArea({ children }: TypingAreaProps) {
  return (
    <form
      action="#"
      className="bg-light"
      onSubmit={(event: FormEvent<HTMLFormElement>) => event.preventDefault()}
    >
      {children}
    </form>
  );
}

export default TypingArea;
