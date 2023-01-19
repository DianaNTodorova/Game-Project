import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import keysolid from '../images/keysolid.png';
import usersolid from '../images/usersolid.png';
import './Signup.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const checkUser = (users) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    console.log(user);
    if (user.username === username && user.password === password) return user;
  };
  const proceedLogin = async (e) => {
    e.preventDefault();
    if (username === '' || username === null) {
      toast.warning('Please Enter Username');
    }
    if (password === '' || password === null) {
      toast.warning('Please Enter Password');
    }
    const user = await axios
      .get('http://localhost:8000/users/')
      .then((res) => checkUser(res.data, username, password))
      .catch((error) => {
        console.log(error);
      });

    if (user.username === username && user.password === password) {
      navigate('/');
      localStorage.getItem('user', JSON.stringify(user.id));
      toast.success('Welcome ' + username);
    } else {
      toast.error('Please Enter valid credentials');
    }
    setUsername('');
    setPassword('');
  };

  return (
    <>
      <form className="container rounded-3 col-lg-7 col-11 p-5">
        <div className="text-centre text-white p-1">
          <h2>Login</h2>
        </div>

        <div className="mb-3 d-flex flex-row gap-2">
          <span className="p-2">
            <img src={usersolid}></img>
          </span>
          <input
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            placeholder="Username"
          ></input>
        </div>
        <div className="mb-3 d-flex flex-row gap-2">
          <span className="p-2">
            <img src={keysolid}></img>
          </span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Password"
          ></input>
        </div>

        <div
          className="
            mb-3 text-center"
        >
          <button
            onClick={proceedLogin}
            type="submit"
            className="btn btn-lg btn-outline-secondary m-2 btn-login text-light"
          >
            Login
          </button>
          <p>Forgot your password! Recover</p>
          <span>Dont have an account? </span>

          <button className="signup-btn ">
            <Link
              to={'/Signup'}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              SignUp
            </Link>
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
