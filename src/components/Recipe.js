import { useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'
import IngredientList from '../components/IngredientList'


const Recipe = ({recipe}) => {

    // <p id="Ingredient" onClick={(() => setingredientCheck(!(ingredientCheck)))}>{ingredientCheck ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} {ingredient} </p>

    const [detailRecipe,setDetailRecipe] = useState(false);
    // const [ingredientCheck,setingredientCheck] = useState(false);

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