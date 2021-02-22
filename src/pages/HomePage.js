import { GiCookingPot } from "react-icons/gi";
import { Link } from 'react-router-dom'
import "../styles/HomePage.scss"

const HomePage = () => {



    return(
        <section className="home-page">
            <div className="center-buttons">
                <Link to="/ingredients" id="ingredients"><p>Ingredients</p></Link>
                <Link to="/recipes" id="recipes"><p>Recipes</p></Link>
                <Link to="/tableware"ton id="tableware"><p>Tableware</p></Link>
                <Link to="/shopping-alerts" id="shopping-alerts"><p>Shopping Alerts</p></Link>
                <div className="center-logo">
                    <GiCookingPot />
                    <h1>Kitchenware</h1>
                </div>
            </div>
        </section>
    )
}

export default HomePage