// import React from "react";
// import "./App.css";
// import va from "./assets/ai.png";
// import {CiMicrophoneOn} from "react-icons/ci"
// import { datacontext } from "./context/UserContext.jsx";


// function App() {
//   let { speak } = useContext(datacontext)
//   speak("Hello Suman , I am your Virtual Assistant")
//   return (
//       <div className="main">
//         <img src={va} id="Dhoni" alt="logo" />
//         <span>I'm Dhoni , Your Advance Virtual Assistant </span>

//         <button onClick={() => speak("Hello Suman , I am your Virtual Assistant")}>Talk to me<CiMicrophoneOn /></button>
//       </div>
//   );
// }

// export default App;




import React, { useContext, useEffect } from "react";
import "./App.css";
import va from "./assets/ai.png";
import { CiMicrophoneOn } from "react-icons/ci";
import { datacontext } from "./context/UserContext.jsx";

function App() {
  let {recognition} = useContext(datacontext);

  // // Speak only once when component mounts
  // useEffect(() => {
  //   recognition.start();
  // }, [recognition]);

  return (
    <div className="main">
      <img src={va} id="Dhoni" alt="logo" />
      <span>I'm Dhoni, Your Advanced Virtual Assistant</span>

      <button onClick={() => { recognition.start(); }}>
        Talk to me <CiMicrophoneOn />
      </button>
    </div>
  );
}

export default App;
