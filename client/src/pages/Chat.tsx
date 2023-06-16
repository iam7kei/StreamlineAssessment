import Card from "../components/Card";
import Button from "../components/Button";
import InputGroup from "../components/InputGroup";
import Input from "../components/Input";
import { useContext, useEffect, useState, ReactNode, ChangeEvent } from "react";
import { UserContext } from "../components/UserContext";
import io from "socket.io-client";
import ChatContainer from "./Chat/ChatContainer";
import Message from "./Chat/Message";
import ChatBox from "./Chat/ChatBox";
import TypingArea from "./Chat/TypingArea";

const socket = io("http://localhost:3001");

interface ChatProps {
  conversation_id: string;
}

function Chat({ conversation_id }: ChatProps) {
  const [data, setData] = useState("");
  const [conversation, setConversation] = useState("1");
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState<any[]>([]);
  const { userData, setUserData } = useContext(UserContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(event.target.value);
  };

  socket.emit("open_conversation", 1);
  const { name, username } = userData;
  const handleSend = async () => {
    if (currentMessage) {
      const messageData = {
        conversation_id: 1,
        username: username,
        name: name,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
    }
  };
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);
  return (
    <>
      <ChatContainer>
        <ChatBox>
          {messageList.map((messageContent) => {
            return (
              <Message
                user={
                  userData.username === messageContent.username
                    ? "sender"
                    : "receiver"
                }
                timestamp={
                  messageContent.time + " - " + messageContent.username
                }
              >
                {messageContent.message}
              </Message>
            );
          })}
          <TypingArea>
            <Input
              type="text"
              placeholder="Type here"
              className="form-control rounded-0 border-0 py-4 bg-light"
              value={currentMessage}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleChange(event)
              }
            />
            <div className="input-group">
              <div className="input-group-append">
                <Button
                  type="button"
                  className="custom-button"
                  id="button-addon2"
                  onClick={() => handleSend()}
                >
                  Send
                </Button>
              </div>
            </div>
          </TypingArea>
        </ChatBox>
      </ChatContainer>
    </>
  );
}

export default Chat;
