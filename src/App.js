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
    document.documentElement.style.setProperty('--settings-background-colour', "#1d1d1d");
    document.documentElement.style.setProperty('--text-colour', "#dddddd");
    document.documentElement.style.setProperty('--background-photo', "url("+DarkBackground+")");
    document.documentElement.style.setProperty('--button-background', '#292929');
    document.documentElement.style.setProperty('--pot-color','#d3a4a5');
    document.documentElement.style.setProperty('--homepage-button-colour','#e9f0c6');
    document.documentElement.style.setProperty('--low-opacity-background','rgba(48, 48, 48, 0.5)');
    document.documentElement.style.setProperty("--table-background","rgba(34, 34, 34, 0.849)");
    

  } else {
    document.documentElement.style.setProperty('--background-colour', "#e6ecee");
    document.documentElement.style.setProperty('--settings-background-colour', "#d4d4d4");
    document.documentElement.style.setProperty('--text-colour', "#1d1d1d");
    document.documentElement.style.setProperty('--background-photo', "url("+LightBackground+")");
    document.documentElement.style.setProperty('--button-background', '#ebebeb');
    document.documentElement.style.setProperty('--pot-color','#664243');
    document.documentElement.style.setProperty('--homepage-button-colour','#1d1d1d');
    document.documentElement.style.setProperty('--low-opacity-background','rgba(240, 128, 128, 0.295)');
    document.documentElement.style.setProperty("--table-background","#e6bfd694");

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
