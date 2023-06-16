import { ReactNode } from "react";

interface UserBoxProps {
  children: ReactNode;
}

function UserBox({ children }: UserBoxProps) {
  return (
    <div className="col-5 px-0">
      <div className="bg-white">
        <div className="bg-gray px-4 py-2 bg-light">
          <p className="h5 mb-0 py-1">Recent</p>
          {children}
        </div>
      </div>
    </div>
  );
}

export default UserBox;
