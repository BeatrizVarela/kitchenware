import { useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import IngredientList from '../components/IngredientList'
import { BsFillBookmarkFill,BsBookmark } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'


const Recipe = ({recipe, setsavedRecipes}) => {

    const [detailRecipe,setDetailRecipe] = useState(false);
    const [bookmark,bookmarkChange] = useState(false);


    const saveRec = (event) => {
        if (localStorage.getItem("saved-recipes")){
            let arr = JSON.parse(localStorage.getItem("saved-recipes"));
            if (localStorage.getItem("saved-recipes").includes(JSON.stringify(recipe))) {
                var i;
                for (i = 0; i < arr.length ; i++) {
                    if (JSON.stringify(arr[i])===JSON.stringify(recipe)) {
                        arr.splice(i,1)
                    }
                }
            } else {
                arr.push(recipe);
            }
            localStorage.setItem("saved-recipes", JSON.stringify(arr));
        } else {
            localStorage.setItem("saved-recipes", JSON.stringify([recipe]));
        }
        setsavedRecipes(JSON.parse(localStorage.getItem("saved-recipes")));

        bookmarkChange(!(bookmark))
    }

    const Bookmark = () => {
        if (localStorage.getItem("saved-recipes")) {
            if (localStorage.getItem("saved-recipes").includes(JSON.stringify(recipe))){
                return <BsFillBookmarkFill />
            } else {
                return <BsBookmark />
            }
        } else {
            return <BsBookmark />
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
                <button id="close" onClick={(() => setDetailRecipe(false))}><AiOutlineClose /></button>
                <button id="save" onClick={saveRec}><Bookmark /> </button>
                <h2 id="title">{recipe.Name}</h2>
                <img src={recipe.Image} alt={recipe.Name} id="food-image" />
                <p>{recipe.Tags.join(", ")} | {recipe.Duration} minutes | {recipe.Difficulty}</p>
                <h2 id="sub-title">Ingredients:</h2>
                {recipe.Ingredients.map((ingredient) => {
                    return (<IngredientList ingredient={ingredient}/>);
                })}
                <h2 id="sub-title">Recipe:</h2>
                <ol>
                    {recipe.Recipe.map((description) => {
                        return <li>{description}</li>
                    })}
                </ol>
            </div>
            </CSSTransition>
        </div>
    )
}

export default Recipe;