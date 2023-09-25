
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import NavBar from "./navbar/Navbar";
import "./App.css";
import Cards from "./cards/Cards";

import { Instructions } from "./components/Instructions";
 import Questions from './questions/Questions'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="home" element={<Home />}>
      
          <Route path="cards" element={<Cards />} />
         
        </Route>
         <Route path="questions" element={<Questions />} /> 
         <Route path="instructions" element={<Instructions />} /> 
      </Routes>
      {/* <Instructions/>
        <Listofquestion/>   */}
    </div>
  );
}

export default App;