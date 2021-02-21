import HomePage from "./pages/HomePage"
import Settings from "./components/Settings"
import Ingredients from "./pages/Ingredients";
import Recipes from "./pages/Recipes"
import Tableware from "./pages/Tableware"
import ShoppingAlerts from "./pages/ShoppingAlerts"
import data from "./data"
import "./styles/App.scss"
import LightBackground from "./media/images/kitchenware-lightmode-wallpaper-edited.jpg"
import DarkBackground from "./media/images/kitchenware-darkmode-wallpaper-cut.jpg"
import {Switch, Route} from "react-router"
import { useState } from "react";


function App() {

  const [darkMode,setdarkMode] = useState(false);
  const [ingAndRec,setingAndRec] = useState(data())

  if (darkMode){
    document.documentElement.style.setProperty('--background-colour', "#0a0e0f");
    document.documentElement.style.setProperty('--settings-background-colour', "#05070c");
    document.documentElement.style.setProperty('--text-colour', "#edf3f5");
    document.documentElement.style.setProperty('--background-photo', "url("+DarkBackground+")");

  } else {
    document.documentElement.style.setProperty('--background-colour', "#e6ecee");
    document.documentElement.style.setProperty('--settings-background-colour', "#d4d4d4");
    document.documentElement.style.setProperty('--text-colour', "#1d1d1d");
    document.documentElement.style.setProperty('--background-photo', "url("+LightBackground+")");
  }

  return (
    <section className="App">
      <Settings darkMode={darkMode} setdarkMode={setdarkMode} />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/ingredients">
          <Ingredients ingAndRec={ingAndRec}/>
        </Route>
        <Route path="/recipes">
          <Recipes ingAndRec={ingAndRec}/>
        </Route>
        <Route path="/tableware">
          <Tableware />
        </Route>
        <Route path="/shopping-alerts">
          <ShoppingAlerts />
        </Route>
      </Switch>
    </section>
  );
}

export default App;
