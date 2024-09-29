const Todo = require("../models/todo");

const getTodo = async (req, res) => {
  try {
    const response = await Todo.find();
    if (response) {
      return res.json({
        message: "Successfully GET !!",
        data: response,
        code: 200,
      });
    } else {
      return res.json({ message: "Something went wrong !!!", code: 204 });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const createTodo = async (req, res) => {
  try {
    const { name } = req.body;
    const response = await Todo.create({ name });
    if (response) {
      return res.json({
        message: "Successfully Created !!",
        data: response,
        code: 200,
      });
    } else {
      return res.json({ message: "Something went wrong !!!", code: 204 });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const { name } = req.body;
    const existingTodo = await Todo.findById(todoId);
    if (!existingTodo) {
      return res.status(404).json({ message: "Todo not found", code: 404 });
    }

    const updateTodo = await Todo.findByIdAndUpdate(
      todoId,
      { name },
      { new: true }
    );
    if (updateTodo) {
      return res.json({
        message: "Successfully Updated !!",
        data: updateTodo,
        code: 200,
      });
    } else {
      return res.json({ message: "Something went wrong !!!", code: 204 });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const existingTodo = await Todo.findById(todoId);
    if (!existingTodo) {
      return res.status(404).json({ message: "Todo not found", code: 404 });
    }

    const deleteTodo = await Todo.findByIdAndDelete({ _id: todoId });
    if (deleteTodo) {
      return res.json({ message: "Successfully Deleted!!", code: 200 });
    } else {
      return res.json({ message: "Something went wrong !!!" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getTodo, createTodo, updateTodo, deleteTodo };
