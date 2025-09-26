// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import UserContext from './context/UserContext.jsx'

// createRoot(document.getElementById('root')).render(
//   <UserContext>
//     <App />
//   </UserContext>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserContext from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContext>
      <App />
    </UserContext>
  </React.StrictMode>
);
