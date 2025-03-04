import React from "react";
import SideMenu from "./components/sidemenu";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <main>
        <p>This is the main content of the app.</p>
      </main>
    </div>
  );
}

export default App;