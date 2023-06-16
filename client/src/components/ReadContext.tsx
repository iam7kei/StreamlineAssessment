import { useContext } from "react";
import { UserContext } from "./UserContext";
export default function ReadContext() {
  const { userData, setUserData } = useContext(UserContext);
  return null;
}
