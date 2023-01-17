import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import keysolid from '../images/keysolid.png';
import usersolid from '../images/usersolid.png';

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
      .get('http://localhost:8000/user/')
      .then((res) => checkUser(res.data, username, password))
      .catch((error) => {
        console.log(error);
      });

    if (user.username === username && user.password === password) {
      /*navigate('/');*/
      localStorage.getItem('user', JSON.stringify(user.id));
      toast.success('Welcome ' + username);
    } else {
      toast.error('Please Enter valid credentials');
    }
    setUsername('');
    setPassword('');
  };

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-5" style={{ marginTop: '100px' }}>
        <form className="container">
          <div className="card">
            <div className="mt-3 text-center">
              <h2>Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group d-flex p-3">
                <span className="p-2">
                  <img src={usersolid} height={63} width={60}></img>
                </span>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control"
                  placeholder="User Name"
                ></input>
              </div>
              <div className="form-group d-flex p-3">
                <span className="p-2">
                  <img src={keysolid} height={63} width={60}></img>
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  placeholder="Password"
                ></input>
              </div>
            </div>
            <div
              className="
            mb-3 text-center"
            >
              <button
                onClick={proceedLogin}
                type="submit"
                className="btn btn-lg btn-outline-secondary m-2"
              >
                Login
              </button>
              <p>Forgot your password! Recover</p>
              <span>Dont have an account? </span>
              <Link to={'/Signup'}>SignUp</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
