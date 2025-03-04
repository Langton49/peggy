import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SideMenu from "./components/sidemenu";
import TodoSchedule from "./components/todoschedule";
import "./styles/App.css";

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/DailyTasks" element={<TodoSchedule/>} />
        </Routes>
      <SideMenu />
    </div>
    </Router>
  );
}

export default App;