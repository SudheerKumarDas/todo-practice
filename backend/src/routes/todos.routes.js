import express from "express";
import { createTodos, updateTodos } from "../controllers/todos.controllers.js";

const router = express.Router();

router.post("/",createTodos);
router.put("/",updateTodos);

export default router;