import express from "express";
import { createTodos } from "../controllers/todos.controllers.js";

const router = express.Router();

router.post("/",createTodos);

export default router;