import React from "react";
const datacontext = createContext()

function UserContext({children}) {
  
  let value = {
    name: "Dhoni",
    role: "Virtual Assistant"
  }
  return (
      <div>
        <datacontext.Provider value={value}>
          {children}
        </datacontext.Provider>
      </div>
  );
}

export default UserContext;