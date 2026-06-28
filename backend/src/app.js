import express from "express"

import todosRoutes from "./routes/todos.routes.js";
import usersRoutes from "./routes/users.routes.js";

const app = express();

app.use(express.json());

app.use("/todos",todosRoutes);
app.use("/users",usersRoutes);

export default app;