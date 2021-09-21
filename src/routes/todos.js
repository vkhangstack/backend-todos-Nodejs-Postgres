const express = require("express");
const router = express.Router();
const Todo = require("../controller/Todo");

router.get("/todos", async (req, res) => {
  let todos = await new Todo().getTodos();
  return res.send(todos);
});
router.post("/todo", async (req, res) => {
  let { title } = req.body;
  await new Todo().createTodo({ title }, false);
  res.redirect("/todos");
});
router.put("/todo/:id", async (req, res) => {
  const { id } = req.params;
  await new Todo().updateTodo(id, res);
  let todos = await new Todo().getTodos();
  res.send(todos);
});
router.delete("/todo/:id", async (req, res) => {
  const { id } = req.params;
  await new Todo().deleteTodo(id);
  const todos = await new Todo().getTodos();
  res.send(todos);
});

module.exports = router;
