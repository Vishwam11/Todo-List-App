import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [showFinished, setShowFinished] = useState(false);

  /*  Toggle For Showing Tasks  */
  const toggleFinished = (e) => {
    setShowFinished(!showFinished);
  };

  /*  Handles Typing Event  */
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  /*  Handles Checkbox Event  */
  const handleCheckbox = (e) => {
    let id = e.target.name;
    const newTodos = todos.map((todo) =>
      todo._id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };

  /** handle fetch */
  const handleFetch = async () => {
    try {
      const response = await axios.get("/todo");
      if (response?.data?.code === 200) {
        const newTodo = response?.data?.data?.map((todo) => ({
          ...todo,
          isCompleted: false,
        }));
        setTodos(newTodo);
      } else {
        console.error("Somthing went wrong !!");
      }
    } catch (err) {
      console.error("Something went wrong !!", err);
    }
  };

  const handleSubmit = async () => {
    try {
      const value = { name: todo };
      const response = isUpdate
        ? await axios.put(`todo/update/${isUpdate._id}`, value)
        : await axios.post("todo/create", value);
      if (response?.data?.code === 200) {
        toast.success(response?.data?.message);
        setTodo("");
        handleFetch();
      } else {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      console.error("Something went wrong !!");
    }
  };

  /* Handles Delete Event */
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`todo/delete/${id}`);

      if (response?.data?.code === 200) {
        setTodos(todos.filter((todo) => todo._id !== id));
        toast.success(response?.data?.message);
      } else {
        toast.error("Delete Not Successful");
      }
    } catch (err) {
      toast.error("Something went wrong while deleting !!");
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 max-h-[85vh] md:w-[35%]">
        <h1 className="font-bold text-center text-3xl">Todo List App</h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className="text-2xl font-bold mx-auto ">Add a Todo</h2>
          <div className="flex ">
            <input
              onChange={handleChange}
              value={todo}
              type="text"
              className="w-full rounded-full px-5 py-1"
            />
            <button
              onClick={handleSubmit}
              disabled={todo?.length <= 3}
              className="bg-violet-800 mx-2 rounded-full hover:bg-violet-950 disabled:bg-violet-500 p-4 py-2 text-sm font-bold text-white"
            >
              {isUpdate ? "Update" : "Create"}
            </button>
          </div>
        </div>
        <input
          className="my-4"
          id="show"
          onChange={toggleFinished}
          type="checkbox"
          checked={showFinished}
        />
        <label className="mx-2" htmlFor="show">
          Show Finished
        </label>
        <div className="h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2"></div>
        <h2 className="text-2xl font-bold">Your Todos</h2>
        <div className="todos overflow-y-auto" style={{ maxHeight: "450px" }}>
          {/* Checking For Tasks */}
          {todos?.length === 0 && (
            <div className="m-5">No Todos to display</div>
          )}
          {/* Iterating The Array For Tasks */}
          {todos
            .filter((todo) => showFinished || !todo.isCompleted)
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((item) => (
              <div key={item._id} className="todo flex my-3 justify-between">
                <div className="flex gap-5">
                  <input
                    name={item._id}
                    onChange={handleCheckbox}
                    type="checkbox"
                    checked={item.isCompleted}
                  />
                  <div className={item.isCompleted ? "line-through" : ""}>
                    {item.name}
                  </div>
                </div>
                <div className="buttons flex h-full">
                  <button
                    onClick={() => {
                      setIsUpdate(item);
                      setTodo(item.name);
                    }}
                    className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                  >
                    <AiFillDelete />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
