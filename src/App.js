
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import NavBar from "./navbar/Navbar";
import "./App.css";
import Cards from "./cards/Cards";
import Quizz from "./cards/Quizz";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="home" element={<Home />}>
          <Route path="quizz" element={<Quizz />} />
          <Route path="cards" element={<Cards />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;