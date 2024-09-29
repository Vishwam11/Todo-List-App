const express = require("express");
const router = express.Router();
const {
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

// Routes
router.route("/").get(getTodo);
router.route("/create").post(createTodo);
router.route("/update/:id").put(updateTodo);
router.route("/delete/:id").delete(deleteTodo);

module.exports = router;
