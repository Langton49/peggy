import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SideMenu from "./components/sidemenu";
import CreateDaySchedule from "./pages/createDaySchedule";
import SignUp from "./pages/signup";
import "./styles/App.css";
import SignIn from "./pages/signin";
import DraftCreateSchedule from "./pages/mockCreateSchedule";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-day-schedule" element={<CreateDaySchedule />} />
          <Route path="/create-account" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />

          {/* mock route for testing purposes only */}
          <Route path="/create-schedule" element={<DraftCreateSchedule />} />

        </Routes>
        <SideMenu />
      </div>
    </Router>
  );
}

export default App;