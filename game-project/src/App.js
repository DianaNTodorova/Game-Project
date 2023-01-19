import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Welcome from "./components/Welcome";
import Adventure from './components/Adventure';
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Welcome />}></Route>
          <Route path="/Adventure" exact element={<Adventure />}></Route>
          <Route path="/Login" exact element={<Login />}></Route>
          <Route path="/Signup" exact element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="colored" position="top-center" />
    </div>
  );
}

export default App;
