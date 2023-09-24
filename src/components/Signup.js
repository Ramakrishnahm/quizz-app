import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ username: " ",email: " ",password: " ", });

  function handleChange(e) {
    const { name, value } = e && e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(login);
    setLogin({ username: "", email: "", password: "" });
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
     
        <h3>Username:</h3>
        <input
          className="form-input"
          id="username"
          name="username"
          type="username"
          placeholder= " Username"
          value={login.username}
          onChange={handleChange}
        />
        <h3>Email:</h3>
        <input
          className="form-input"
          id="email"
          name="email"
          type="email"
          placeholder=" Email"
          value={login.email}
          onChange={handleChange}
        />
       
        <h3>Password:</h3>
        <input
          className="form-input"
          id="password"
          name="password"
          type="password"
          placeholder=" Password"
          value={login.password}
          onChange={handleChange}
        />
        <button className="register-btn" type="submit">
          SignUp
        </button>

        <button className="login-btn" onClick={() => navigate("/")}>
          Login
        </button>
      </form>
    </div>
  );
};
export default Signup;