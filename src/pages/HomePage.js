import { GiKitchenScale } from "react-icons/gi";
import "../styles/HomePage.scss"

const HomePage = ({darkMode,setdarkMode}) => {

    const SettingsDarkMode = (event) => {
        setdarkMode(!darkMode);
    }

    return(
        <section className="home-page">
            <button onClick={SettingsDarkMode} className="settings">Dark mode</button>
            <div className="center-buttons">
                <button id="ingredients">Ingredients</button>
                <button id="recipes">Recipes</button>
                <button id="tableware">Tableware</button>
                <button id="shopping-alerts">Shopping Alerts</button>
                <div className="center-logo">
                    <GiKitchenScale />
                </div>
            </div>
        </section>
    )
}

export default HomePage