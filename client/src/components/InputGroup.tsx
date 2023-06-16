import { ChangeEvent, useState, useRef } from "react";
import Input from "./Input";

interface InputGroupProps {
  onClick?: () => void;
  onFocus?: () => void;
}

function InputGroup({ onFocus, onClick }: InputGroupProps) {
  const [messageValue, setMessageValue] = useState("");
  const noValue = useRef("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessageValue(event.target.value);
  };
  return (
    <div className="input-group mb-3">
      <Input
        type="text"
        className="form-control"
        placeholder="Send message here"
        onFocus={onFocus}
        value={messageValue}
        onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event)}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={onClick}
        >
          Button
        </button>
      </div>
    </div>
  );
}

export default InputGroup;
