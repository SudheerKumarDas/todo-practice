import express from "express"

import todosRoutes from "./routes/todos.routes.js";

const app = express();

app.use(express.json());

app.use("/todos",todosRoutes);

export default app;