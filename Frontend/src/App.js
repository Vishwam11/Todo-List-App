import Todo from "./pages";
import axios from "axios";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = "http://localhost:5000/";

const App = () => {
  return (
    <>
      <ToastContainer transition={Slide} autoClose={1500} stacked />
      <Todo />
    </>
  );
};

export default App;
