const db = require("../config/db");

class Todo {
  // get all todo
  async getTodos() {
    const data = await db.query("SELECT * FROM todos");
    return data.rows;
  }

  //create a new todo

  async createTodo(todo) {
    await db.query("INSERT INTO todos(title, checked) VALUES ($1, $2)", [
      todo.title,
      false,
    ]);
    return;
  }

  // update a todo

  async updateTodo(id) {
    const original_todo = await db.query("SELECT * FROM todos WHERE id=$1", [
      parseInt(id),
    ]);
    const new_checked = !original_todo.rows[0].checked;

    await db.query("UPDATE todos SET checked=$1 WHERE id=$2", [
      new_checked,
      parseInt(id),
    ]);
    return;
  }

  // delete a to
  async deleteTodo(id) {
    await db.query("DELETE FROM todos WHERE id=$1", [parseInt(id)]);
    return;
  }
}

module.exports = Todo;
