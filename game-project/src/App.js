import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="colored" position="top-center" />
    </div>
  );
}

export default App;
