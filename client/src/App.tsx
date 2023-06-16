import { UserContext } from "./components/UserContext";
import { useState } from "react";
import { Route, Routes, Router, Link } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/js/dist/toast";
import Button from "./components/Button";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contacts from "./pages/Contacts";
import Chat from "./pages/Chat";

function App() {
  const [userData, setUserData] = useState<{
    id: string;
    name: string;
    username: string;
  }>({
    id: "",
    name: "",
    username: "",
  });

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData(data: any) {
          setUserData(data);
        },
      }}
    >
      <Link to="/login">Login</Link>
      <Link to="/chat"> Chat</Link>
      <Link to="/register"> Register</Link>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/chat" element={<Chat conversation_id="1" />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
