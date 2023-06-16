import { useState, FormEvent, ChangeEvent, ChangeEventHandler } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import Form from "../components/Form";
import Button from "../components/Button";
import Toast from "../components/Toast";
function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const handleName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setpassword(event.target.value);
  };

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name && username && password) {
      const reqBody = {
        name: name,
        username: username,
        password: password,
      };
      await fetch("/user/register", {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(reqBody),
      }).then((res) => {
        res.json();
        console.log(res);
      });
    }
  };

  return (
    <>
      <Card>
        <h3>Register</h3>
        <Form action="" method="post" onSubmit={handleRegister}>
          <Input
            type="text"
            placeholder="Enter name here"
            className="form-control"
            id="name"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleName(event)
            }
            value={name}
          />
          <Input
            type="text"
            placeholder="Enter username here"
            className="form-control"
            id="username"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleUsername(event)
            }
            value={username}
          />
          <Input
            type="password"
            placeholder="Enter passwoprd here"
            className="form-control"
            id="password"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handlePassword(event)
            }
            value={password}
          />
          <Button type="submit" id="btnRegister" className="btn btn-primary">
            Register
          </Button>
        </Form>
      </Card>
      <Toast>Successfully registered user!</Toast>
    </>
  );
}

export default Register;
