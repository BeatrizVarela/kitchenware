import Recipe from "../components/Recipe"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { BsCalendar,BsFillBookmarkFill } from 'react-icons/bs'
import { RiHistoryFill } from 'react-icons/ri'
import "../styles/Recipes.scss"


const Recipes = ({ingAndRec}) => {

    const [recipeName,recipeNameOnChange] = useState("");
    const [recipeFilter, recipeFilterOnChange] = useState(null);


    return(
        <section className="recipes">
            <Link to="/">Back</Link>
            <div className="search-bar">
                <label htmlFor="search">Search:</label>
                <input type="text" value={recipeName} onChange={(e) => recipeNameOnChange(e.target.value)} />
            </div>
            <div className="functionalities">
                <button>
                    <BsCalendar />
                    <br />
                    This Week
                </button>
                <br />
                <button>
                    <RiHistoryFill />
                    <br />
                    Past Meals
                </button>
                <br />
                <button>
                    <BsFillBookmarkFill />
                    <br />
                    Saved Meals
                </button>
            </div>
            <div className="filters">
                <p>Filtros aqui</p>
            </div>
            {ingAndRec.Recipes.map((recipe) => {
                if (recipe.Name.toUpperCase().indexOf(recipeName.toUpperCase()) > -1) {
                    return <Recipe recipe={recipe} />
                } else {
                    return <p></p>
                }
            })}
        </section>
    );
}
export default Recipes;