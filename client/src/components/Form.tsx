import { ReactNode, FormEvent } from "react";

interface FormProps {
  action: string;
  children: ReactNode;
  method: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

function Form({ action, children, method, onSubmit }: FormProps) {
  return (
    <form action={action} method={method} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default Form;
