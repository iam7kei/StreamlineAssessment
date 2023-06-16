import { ReactNode } from "react";
import UserBox from "./UserBox";
import UserBoxItems from "./UserBoxItems";
import ChatBox from "./ChatBox";
import Message from "./Message";
import TypingArea from "./TypingArea";

interface ChatContainerProps {
  children?: ReactNode;
}

function ChatContainer({ children }: ChatContainerProps) {
  return (
    <div className="row rounded-lg overflow-hidden shadow">
      <UserBox>
        <UserBoxItems />
      </UserBox>

      {children}
    </div>
  );
}

export default ChatContainer;
