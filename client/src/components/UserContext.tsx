import { createContext } from "react";

export const UserContext = createContext({
  userData: { id: "", name: "", username: "" },
  setUserData: ({ data }: any | null) => {},
});
