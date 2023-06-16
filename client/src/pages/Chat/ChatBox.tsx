import { ReactNode } from "react";

interface ChatBoxProps {
  children?: ReactNode;
}

function ChatBox({ children }: ChatBoxProps) {
  return (
    <div className="col-7 px-0">
      <div className="px-4 py-5 chat-box bg-white">{children}</div>
    </div>
  );
}

export default ChatBox;
