module.exports = (Server, server, instrument) => {
  const usersOnline = new Map();
  const rooms = [];

  const io = new Server(server, {
    cors: {
      origin: ["http://localhost:3000", "https://admin.socket.io"],
      methods: ["GET", "POST"],
      transports: ["websocket", "polling"],
      credentials: true,
    },
    allowEIO3: true,
  });

  io.on("connection", (socket) => {
    console.log(`user is connected on socket ${socket.id}`);

    socket.on("user register", (data) => {
      if (!usersOnline.has(data.username)) {
        // register user and announce to rooms joined
        data.id = socket.id;
        usersOnline.set(data.username, data);
        socket.join(data.rooms);
        socket.to(data.rooms[0]).emit('new user', `${data.username} has joined the room ${data.rooms[0]}`)
      } else {
        // anounce user return arrival and isssue new socket ID
        let user = usersOnline.get(data.username);
        user.id = socket.id;
        socket.join(data.rooms);
        socket.to(data.rooms[0]).emit('user online', `${data.username} is back online`);
      }
      console.log(usersOnline);
    });

    socket.on("delete post", (data) => {
        socket.broadcast.emit("delete post", (data))
    });

    socket.on("approve post", (data) => {
      socket.broadcast.emit("delete post", (data))
  });

    socket.on("new post", (data) => {
      socket.broadcast.emit("new post", (data))
  });

    socket.on("disconnect", () => {
      // log time of disconnection
      console.log(
        `the socket ${socket.id} has disconnected at ${new Date(
          Date.now()
        ).toLocaleTimeString()}`
      );
    });
  });

  instrument(io, {
    auth: false,
  });
};
