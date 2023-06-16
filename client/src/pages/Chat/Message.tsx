import { ReactNode } from "react";
interface MessageProps {
  children?: ReactNode;
  timestamp?: string;
  user?: string;
}
function Message({ children, timestamp, user }: MessageProps) {
  return (
    <div className="media-body ml-3">
      <div
        className={`bg-${
          user === "sender" ? "light" : "primary"
        } rounded py-2 px-3 mb-2`}
      >
        <p className="text-small mb-0 text-muted">{children}</p>
      </div>
      <p className="small text-muted">{timestamp}</p>
    </div>
  );
}

export default Message;
