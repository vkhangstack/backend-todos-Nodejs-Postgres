const express = require("express");
const cors = require("cors");
const app = express();
const todoRouter = require("./routes/todos");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.redirect("/todos");
});
app.use(todoRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running listen  at http://localhost:${PORT}`);
});
