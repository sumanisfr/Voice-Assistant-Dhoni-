import React from "react";
import "./App.css";
import va from "./assets/ai.png";
import {CiMicrophoneOn} from "react-icons/ci"


function App() {
  return (
      <div className="main">
        <img src={va} id="Dhoni" alt="logo" />
        <span>I'm Dhoni , Your Advance Virtual Assistant </span>

        <button>Talk to me<CiMicrophoneOn /></button>
      </div>
  );
}

export default App;