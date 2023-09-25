import { useState } from "react";
import './login.css'
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({  email: "",password: "" });
  const {password,email} = login;
  function handleChange   (e)  {
  setLogin({...login,[e.target.name]:e.target.value})
  
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(login);
    setLogin({ email: "", password: "" });
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h3>Email:</h3>
        <input
          className="form-input"
          id="email"
          name="email"
          type="email"
          placeholder=" Email"
          value={email}
          onChange={handleChange}
        />
      
        <h3>Password</h3>
        <input
          className="form-input"
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <button className=" login-btn" type="submit">
          Login
        </button>
        <button
          className=" register-btn"
          onClick={() => navigate("/signup")}
        >
          Register
        </button>
      </form>
    </div>
  );
};
export default Login;