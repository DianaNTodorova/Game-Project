import React, { useState } from 'react';
import axios from 'axios';
import "./Signup.css";
//import AlertMsg from './AlertMsg';
import nameIcon from "../images/name.svg";
import usernameIcon from "../images/username.svg";
import passwordIcon from "../images/password.svg";
import confirmIcon from "../images/confirm.svg";


const Signup = () => {
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  
  const [fullNameError, setFullNameError] = useState("")
  const [usernameError, setUsernameError] = useState("")
  const [passwordError, setPasswordError] = useState("")
 const [confirmPasswordError, setConfirmPasswordError] = useState("")
  const [alert, setAlert] = useState(null);

  // const checkUser = (users) => {
  //   const user = users.find(user => user.fullName === fullName || user.username === username)
  // };

  // const showAlert = (message, type) => {
  //   setAlert({
  //       msg: message,
  //       type: type
  //   })
  //   setTimeout(() => {
  //       setAlert(null);
  //   }, 4000);
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFullName("");
    setUsername("");
    //setEmail("");
    setPassword("");
    setConfirmPassword("");

    setFullNameError("");
    setUsernameError("");
    //setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    
    let isError = false;
   
    if (!fullName) {
      setFullNameError("Name is required");
      isError = true;
    }
    if (!username) {
        setUsernameError("username is required");
        isError = true;
       
    }
    if (!password) {
        setPasswordError("Password is required");
        isError = true;
        
    }
    if (password !== confirmPassword) {
  setConfirmPasswordError("password and confirm password does not match");
    isError = true;
        
    }
    if (!isError) {
        try {
          const userExist = await axios.get(`http://localhost:8000/users?username=${username}`);
          if (userExist.data.length > 0) {
            alert("user already exists!");
          } 
          else {
              await axios.post('http://localhost:8000/users', {
              fullName,
              username,
              password,
              confirmPassword
            });
            alert("User has been successfully signed up!");
          }
        } catch (error) {
          console.log(error);
        }
      }
    }

  return (
  <> 
    <form className= "container rounded-3 col-lg-7 col-11 p-5" onSubmit={handleSubmit}>
    
      <span className='text-centre text-white p-1'><h5>Signup</h5></span>

        <div className="mb-3 d-flex flex-row gap-2">
          <span>
            <img src={nameIcon} alt="name-icon"/>
          </span>
          <div className='input-group'>
            <input type="text" className="form-control" placeholder='Name' value={fullName} onChange={(e) => setFullName(e.target.value)} />
          </div>
        </div>
        {fullNameError && <span style={{ color: "red" }}>{fullNameError}</span>}
        
        <div className="mb-3 d-flex flex-row gap-2">
          <span>
            <img src={usernameIcon} alt="username-icon"/>
          </span>

          <div className="input-group">
            <input type="text" className="form-control" placeholder='User Name' value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
        </div>
        {usernameError && <span style={{ color: "red" }}>{usernameError}</span>}
      
        <div className="mb-3 d-flex flex-row gap-2">
          <span>
            <img src={passwordIcon} alt="password-icon"/>
          </span>
          <div className="input-group">
            <input type="password" className="form-control" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div> 
        </div>
        {passwordError && <span style={{ color: "red" }}>{passwordError}</span>}
      
        <div className="mb-3 d-flex flex-row gap-2">
          <span>
            <img src={confirmIcon} alt="confirm-icon"/>
          </span>
          <div className="input-group">
            <input type="password" className="form-control" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
        </div>
        {confirmPasswordError && <span style={{ color: "red" }}>{confirmPasswordError}</span>}
      
      <button className='signup-btn' type="submit" onClick={handleSubmit}>Sign up</button>

      {/* {alert && <AlertMsg showAlert = {alert} onHide={()=> setAlert(false)}/>}  */}
    </form>
  </>
  )
}

export default Signup;
