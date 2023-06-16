import { ChangeEvent, useContext, useEffect, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/UserContext";
import Card from "../components/Card";
import Input from "../components/Input";
import Form from "../components/Form";
import Button from "../components/Button";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

function Login(this: any) {
  const navigate = useNavigate();
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginpassword] = useState("");
  const { userData, setUserData } = useContext(UserContext);
  const handleUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginUsername(event.target.value);
  };
  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginpassword(event.target.value);
  };

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loginUsername && loginPassword) {
      const data = await fetch(`/user/${loginUsername}`)
        .then((res) => res.json())
        .then((currentData) => currentData);
      if (data) {
        if (data[0]) {
          const { _id, name, username, password } = data[0];
          if (password == loginPassword && _id) {
            const user = {
              id: _id,
              name: name,
              username: username,
            };

            setUserData(user);
            socket.emit("login_user", user);

            navigate("/chat");
          }
        } else {
          alert("Failed to login");
        }
      }
    }
  };

  return (
    <>
      <Card>
        <h3>Login</h3>
        <Form action="#" method="post" onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="Username"
            className="fadeIn first login-input"
            id="login"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleUsername(event)
            }
            value={loginUsername}
          />
          <Input
            type="password"
            placeholder="Password"
            className="fadeIn second login-input"
            id="password"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handlePassword(event)
            }
            value={loginPassword}
          />
          <br></br>
          <Button
            type="submit"
            className="fadeIn third custom-button"
            id="btnLogin"
          >
            Login
          </Button>
        </Form>
      </Card>
    </>
  );
}

export default Login;
