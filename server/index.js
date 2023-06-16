const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors");
const { Server } = require("socket.io");
const Register = require("../models/RegisterModel.js");
const Login = require("../models/LoginModel.js");
const User = require("../models/UserModel.js");
const { connected } = require("process");
app.use(express.json(), cors());

const server = http.createServer(app);

let connected_users = [];

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("open_conversation", (data) => {
    socket.join(data);
  });

  socket.on("login_user", (data) => {
    if (connected_users.includes(data)) {
      socket.emit("receive_data", "User is logged in");
    } else {
      connected_users.push(data, connected_users);
    }
  });

  socket.on("send_message", (data) => {
    socket.to(data.conversation_id).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log(`User: ${socket.id} disconnected`);
  });
});

app.post("/user", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/user/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const user = await User.find({}).where("username").equals(username);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//mongo db connection
const dbURI =
  "mongodb+srv://assess4:gKwsdiVk7y22krR6@assessment4.bonqaph.mongodb.net/Assessment4?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
