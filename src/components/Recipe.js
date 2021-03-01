import { useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import IngredientList from '../components/IngredientList'
import { BsFillBookmarkFill } from 'react-icons/bs'


const Recipe = ({recipe}) => {

    const [detailRecipe,setDetailRecipe] = useState(false);

    const saveRec = () => {
        if (localStorage.getItem("saved-recipes")){
            let i = JSON.parse(localStorage.getItem("saved-recipes"));
            let arr = [i]
            arr.push(recipe)
            localStorage.setItem("saved-recipes", JSON.stringify(arr));
        } else {
            localStorage.setItem("saved-recipes", JSON.stringify([recipe]));
        }
    }


    return(
        <div>
        <div className="recipe-card" onClick={(() =>setDetailRecipe(true))}>
            <h2>{recipe.Name}</h2>
            <img src={recipe.Image} alt={recipe.Name} id="food-image" />
            <p>{recipe.Tags.join(", ")}</p>
        </div>
            <CSSTransition
                in={detailRecipe}
                timeout={300}
                classNames="alert"
                unmountOnExit
                onEnter={() => setDetailRecipe(true)}
                onExited={() => setDetailRecipe(false)}
            >
        
        <div className="detail-recipe">
                <button id="close" onClick={(() => setDetailRecipe(false))}>Close</button>
                <button id="save" onClick={saveRec}><BsFillBookmarkFill /></button>
                <h2>{recipe.Name}</h2>
                <img src={recipe.Image} alt={recipe.Name} id="food-image" />
                <p>{recipe.Tags.join(", ")} | {recipe.Duration} minutes | {recipe.Difficulty}</p>
                {recipe.Ingredients.map((ingredient) => {
                    return (<IngredientList ingredient={ingredient}/>);
                })}
                <p>{recipe.Recipe}</p>
            </div>
            </CSSTransition>
        </div>
    )
}

export default Recipe;