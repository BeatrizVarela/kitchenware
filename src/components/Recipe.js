import { useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import IngredientList from '../components/IngredientList'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'


const Recipe = ({recipe, setsavedRecipes}) => {

    const [detailRecipe,setDetailRecipe] = useState(false);

    const saveRec = () => {
        if (localStorage.getItem("saved-recipes")){
            let i = [...JSON.parse(localStorage.getItem("saved-recipes"))];
            if (localStorage.getItem("saved-recipes").includes(JSON.stringify(recipe))) {
                i.splice(recipe,1);
            } else {
                i.push(recipe)
            }
            localStorage.setItem("saved-recipes", JSON.stringify(i));
        } else {
            localStorage.setItem("saved-recipes", JSON.stringify([recipe]));
        }
        setsavedRecipes(JSON.parse(localStorage.getItem("saved-recipes")));
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
                <button id="close" onClick={(() => setDetailRecipe(false))}><AiOutlineClose /></button>
                <button id="save" onClick={saveRec}><BsFillBookmarkFill /></button>
                <h2 id="title">{recipe.Name}</h2>
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