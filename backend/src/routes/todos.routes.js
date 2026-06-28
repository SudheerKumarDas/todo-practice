import express from "express";
import { createTodos, deleteTodos, updateTodos } from "../controllers/todos.controllers.js";

const router = express.Router();

router.post("/",createTodos);
router.put("/:id",updateTodos);
router.delete("/:id",deleteTodos);

export default router;