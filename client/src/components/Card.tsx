import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <>
      <div className="card">
        <div className="card-body">{children}</div>
      </div>
    </>
  );
}

export default Card;
