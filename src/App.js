import { useState } from "react";
import HomePage from "./pages/HomePage"
import "./styles/App.scss"


function App() {

  const [darkMode,setdarkMode] = useState(false);

  if (darkMode){
    document.documentElement.style.setProperty('--background-colour', "#0a0e0f");
    document.documentElement.style.setProperty('--text-colour', "#edf3f5");
  } else {
    document.documentElement.style.setProperty('--background-colour', "#e6ecee");
    document.documentElement.style.setProperty('--text-colour', "#1d1d1d");
  }

  return (
    <section className="App">
      <HomePage darkMode={darkMode} setdarkMode={setdarkMode} />
    </section>
  );
}

export default App;
