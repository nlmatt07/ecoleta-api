import express from "express";

const app = express();

app.use(express.json());

const users = ["Diego", "Mateus", "Eu"];

app.get("/users", (request, response) => {
  const search = String(request.query.search);

  console.log(search);

  const fielteredUsers = search
    ? users.filter((user) => user.includes(search))
    : users;

  return response.json(fielteredUsers);
});

app.get("/users/:id", (request, response) => {
  const id = Number(request.params.id);

  const user = users[id];

  return response.json(users);
});

app.post("/users", (request, response) => {
  const data = request.body;

  console.log(data);

  const user = {
    name: data.name,
    email: data.email,
  };
  return response.json(user);
});

app.listen(3333);
