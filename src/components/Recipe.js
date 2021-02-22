import { useState } from 'react'


const Recipe = ({recipe}) => {

    const [detailRecipe,setDetailRecipe] = useState(false)

    return(
        <div className="recipe">
            <h2 onClick={(() =>setDetailRecipe(true))}>{recipe.Name}</h2>
            <p onClick={(() =>setDetailRecipe(true))}>{recipe.Tags.join(", ")}</p>
            <div className={detailRecipe ? "recipe-open" : "recipe-hidden"}>
                <button id="close" onClick={(() => setDetailRecipe(false))}>Close</button>
                <h2>{recipe.Name}</h2>
                <p>{recipe.Tags.join(", ")} | {recipe.Duration} minutes | {recipe.Difficulty}</p>
                <p>{recipe.Ingredients.join(", ")}</p>
                <p>{recipe.Recipe}</p>
            </div>
        </div>
    )
}

export default Recipe;