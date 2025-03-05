import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SideMenu from "./components/sidemenu";
import CreateDaySchedule from "./pages/createDaySchedule";
import "./styles/App.css";

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/createDaySchedule" element={<CreateDaySchedule/>} />
        </Routes>
      <SideMenu />
    </div>
    </Router>
  );
}

export default App;