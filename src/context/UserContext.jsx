// import { createContext } from "react";
// export const datacontext = createContext()

// function UserContext({children}) {

//   function speak(text){
//     let text_speak = new SpeechSynthesisUtterance();
//     text_speak.volume = 1;
//     text_speak.rate = 1;
//     text_speak.pitch = 1;
//     text_speak.lang = "hi-GB";
//     window.speechSynthesis.speak(text_speak);

//   }

//   let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//   let recognition = new speechRecognition();
//   recognition.onresult = (e) => {
//     console.log(e);
//   };
//   let value = {
//     recognition
//   }
//   return (
//       <div>
//         <datacontext.Provider value={value}>
//           {children}
//         </datacontext.Provider>
//       </div>
//   );
// }

// export default UserContext;


import { createContext } from "react";

export const datacontext = createContext();

function UserContext({ children }) {
  // Text-to-Speech function
  function speak(text) {
    let text_speak = new SpeechSynthesisUtterance();
    text_speak.text = text;   // <-- You forgot this line
    text_speak.volume = 1;
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.lang = "en-GB"; // 'hi-GB' is not valid, better use 'en-GB'
    window.speechSynthesis.speak(text_speak);
  }

  // Speech Recognition (Voice Input)
  let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  let recognition = new SpeechRecognition();
  recognition.lang = "en-GB"; // set recognition language
  recognition.onresult = (e) => {
    console.log("You said:", e.results[0][0].transcript);
  };

  // Provide both speak & recognition to context
  let value = {
    speak,
    recognition,
  };

  return (
    <datacontext.Provider value={value}>
      {children}
    </datacontext.Provider>
  );
}

export default UserContext;
