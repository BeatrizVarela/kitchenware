import Recipe from "../components/Recipe"
import { Link } from 'react-router-dom'
import { useState } from 'react'
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
            {ingAndRec.Recipes.map((recipe) => {
                if (recipe.Name.indexOf(recipeName) > -1) {
                    return <Recipe recipe={recipe} />
                } else {
                    return <p></p>
                }
            })}
        </section>
    );
}
export default Recipes;