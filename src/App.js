import HomePage from "./pages/HomePage";
import Settings from "./components/Settings";
import Ingredients from "./pages/Ingredients";
import Recipes from "./pages/Recipes";
import Tableware from "./pages/Tableware";
import ShoppingAlerts from "./pages/ShoppingAlerts";
import data from "./data";
import "./styles/App.scss";
import LightBackground from "./media/images/kitchenware-lightmode-wallpaper-edited.jpg";
import DarkBackground from "./media/images/kitchenware-darkmode-wallpaper-cut.jpg";
import { Switch, Route } from "react-router";
import { useState } from "react";
import { TransitionGroup,CSSTransition } from 'react-transition-group'

function App() {
  //use states
  const [darkMode,setdarkMode] = useState(JSON.parse(localStorage.getItem("dark-mode")));
  const [ingAndRec,setingAndRec] = useState(data())


  //set variaveis para o css em caso de dark mode ou não dark mode
  if (darkMode){
    document.documentElement.style.setProperty('--background-colour', "#0a0e0f");
    document.documentElement.style.setProperty('--settings-background-colour', "#1d1d1de8");
    document.documentElement.style.setProperty("--final-table-background","rgba(34, 34, 34, 0.849)");
    document.documentElement.style.setProperty('--text-colour', "#dddddd");
    document.documentElement.style.setProperty('--background-photo', "url("+DarkBackground+")");
    document.documentElement.style.setProperty('--button-background', '#292929');
    document.documentElement.style.setProperty('--pot-color','#d3a4a5');
    document.documentElement.style.setProperty('--homepage-button-colour','#e9f0c6');
    document.documentElement.style.setProperty("--button-color", "#e9f0c6");
    document.documentElement.style.setProperty('--low-opacity-background','rgba(48, 48, 48, 0.7)');
    document.documentElement.style.setProperty("--table-background","rgba(34, 34, 34, 0.849)");
    document.documentElement.style.setProperty("--button-background2","#111111");


  } else {
    document.documentElement.style.setProperty('--background-colour', "#e6ecee");
    document.documentElement.style.setProperty('--settings-background-colour', "#f7e2e2cc");
    document.documentElement.style.setProperty("--final-table-background","rgba(218, 238, 195, 0.705)");
    document.documentElement.style.setProperty('--text-colour', "#1d1d1d");
    document.documentElement.style.setProperty('--background-photo', "url("+LightBackground+")");
    document.documentElement.style.setProperty('--button-background', '#dedddd73');
    document.documentElement.style.setProperty("--button-color","rgb(173, 127, 127)");
    document.documentElement.style.setProperty('--pot-color','#664243');
    document.documentElement.style.setProperty('--homepage-button-colour','#1d1d1d');
    document.documentElement.style.setProperty('--low-opacity-background','rgba(234, 202, 202 , 0.4)');
    document.documentElement.style.setProperty("--table-background","#e6bfd694");
    document.documentElement.style.setProperty("--button-background2","#ffc7e8");
  }

  return (
    <section className="App">
      <Settings darkMode={darkMode} setdarkMode={setdarkMode} />

      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={300}
            classNames="page"
          >
            <Switch location={location}>
              <Route exact path="/" component={HomePage} />
              <Route path="/ingredients" component={Ingredients}>
                <Ingredients ingAndRec={ingAndRec}/>
              </Route>
              <Route path="/recipes" component={Recipes}>
                <Recipes ingAndRec={ingAndRec}/>
              </Route>
              <Route path="/tableware" component={Tableware}>
                <Tableware ingAndRec={ingAndRec}/>
              </Route>
              <Route path="/shopping-list" component={ShoppingAlerts}>
                <ShoppingAlerts ingAndRec={ingAndRec} />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />

    </section>
  );
}

export default App;
