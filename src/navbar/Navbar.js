import { NavLink, Outlet } from "react-router-dom";
import './navbar.css'
const NavBar = () => {
  const Styles = ({ isActive }) => (isActive ? "activetab" : "");
  return (
    <nav className="navbar">
      <NavLink className={Styles} to="/home">
        Home
      </NavLink>
      <NavLink className={Styles} to="/">
        Login
      </NavLink>
      <NavLink className={Styles} to="/signup">
        Signup
      </NavLink>

      {/* <NavLink className={Styles} to="/Listofquestion">
        Listofquestions
      </NavLink> */}
      <br />
      <Outlet />
    </nav>
  );
};
export default NavBar;