import Recipe from "../components/Recipe"
import SavedRecipes from "../components/SavedRecipes"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { BsCalendar,BsFillBookmarkFill } from 'react-icons/bs'
import { RiHistoryFill } from 'react-icons/ri'
import { BiArrowBack } from 'react-icons/bi'
import "../styles/Recipes.scss"



const Recipes = ({ingAndRec}) => {

    const [recipeName,recipeNameOnChange] = useState("");
    const [recipeFilter, setrecipeFilter] = useState([]);
    const [recipeDificulty, setrecipeDificulty] = useState([]);
    const [recipeMeal, setrecipeMeal] = useState([]);
    const [savedOpen, setSavedOpen] = useState(false);
    const [savedRecipes,setsavedRecipes] = useState(JSON.parse(localStorage.getItem("saved-recipes")));


    const dificultyChange = (event) => {
        let newList = [...recipeDificulty]
        if (newList.includes(event.target.innerHTML)){
            let index = newList.indexOf(event.target.innerHTML)
            newList.splice(index, 1);
        } else {
            newList.push(event.target.innerHTML)
        }
        setrecipeDificulty(newList)
        event.target.classList.toggle('Checked');
    }

    const mealChange = (event) => {
        let newList = [...recipeMeal]
        if (newList.includes(event.target.innerHTML)){
            let index = newList.indexOf(event.target.innerHTML)
            newList.splice(index, 1);
        } else {
            newList.push(event.target.innerHTML)
        }
        setrecipeMeal(newList)
        event.target.classList.toggle('Checked');
    }

    const recipeFilterOnChange = (e) => {
        let filter = e.target.innerHTML;
        let newRecipeFilterList = [...recipeFilter];
        if (newRecipeFilterList.includes(filter)) {
            let i = newRecipeFilterList.indexOf(filter);
            newRecipeFilterList.splice(i, 1);
            e.target.classList.toggle('Checked-filter');
        } else if (filter === 'Remove Filters'){
            newRecipeFilterList = []
            let checked = [...document.getElementsByClassName("Checked-filter")]
            if (checked.length>0) {
                let i;
                for (i = 0; i < checked.length; i++){
                    checked[i].classList.toggle('Checked-filter')
                }
            }
        } else {
            newRecipeFilterList.push(filter);
            e.target.classList.toggle('Checked-filter');
        }

        setrecipeFilter(newRecipeFilterList);
    }


    return(
        <section className="recipes">
            <Link to="/" id="Back"><BiArrowBack /></Link>
            <div className="search-bar">
                <label htmlFor="search">Search:</label>
                <input type="text" value={recipeName} onChange={(e) => recipeNameOnChange(e.target.value)} />
            </div>
            <div className="functionalities">
                <div className="button-combo">
                    <button className="left-meals-buttons" id="week" onClick={() => alert("Only button that does something is saved recipes :(")}>
                        <BsCalendar />
                    </button>
                    <br />
                    <p>This Week</p>
                    <br />
                </div>
                <div className="button-combo">
                    <button className="left-meals-buttons" id="past" onClick={() => alert("Only button that does something is saved recipes :(")}>
                        <RiHistoryFill />
                    </button>
                    <br />
                    <p>Past Meals</p>
                    <br />
                </div>
                <div className="button-combo">
                    <button className="left-meals-buttons" id="saved" onClick={() => setSavedOpen(!savedOpen)}>
                        <BsFillBookmarkFill />
                    </button>
                    <br />
                    <p>Saved Meals</p>
                </div>
            </div>
            <SavedRecipes savedOpen={savedOpen} setSavedOpen={setSavedOpen} savedRecipes={savedRecipes} setsavedRecipes={setsavedRecipes}/>
            <div className="filters">
                <div className="regular-filters">
                    <button onClick={recipeFilterOnChange} id="remove-button">Remove Filters</button>
                    <h4>Filters:</h4>
                    <button onClick={recipeFilterOnChange}>Vegetarian</button>
                    <button onClick={recipeFilterOnChange}>Meat</button>
                    <button onClick={recipeFilterOnChange}>Lactose</button>
                    <button onClick={recipeFilterOnChange}>Pasta</button>
                    <button onClick={recipeFilterOnChange}>Vegetables</button>
                    <button onClick={recipeFilterOnChange}>Soup</button>
                </div>
                <div className="meal-type">
                    <h4>Meal Type:</h4>
                    <button onClick={mealChange}>Lunch or Dinner</button>
                    <button onClick={mealChange}>Breakfast</button>
                </div>
                <div className="difficulty-change">
                    <h4>Dificulty filter:</h4>
                    <button onClick={dificultyChange}>Easy</button>
                    <button onClick={dificultyChange}>Medium</button>
                    <button onClick={dificultyChange}>Hard</button>
                </div>
            </div>
            {ingAndRec.Recipes.map((recipe) => {
                if (recipe.Name.toUpperCase().indexOf(recipeName.toUpperCase()) > -1) { //Search-bar
                    if (recipeDificulty.length===0){
                        if (recipeMeal.includes(recipe.Meal)){
                            if (recipe.Tags.some(r=> recipeFilter.includes(r))){
                                return <Recipe recipe={recipe} setsavedRecipes={setsavedRecipes} />
                            } else if (recipeFilter.length===0) {
                                return <Recipe recipe={recipe} setsavedRecipes={setsavedRecipes} />
                            } else {
                                return <p></p>
                            }
                        } else if (recipeMeal.length===0) {
                            if (recipe.Tags.some(r=> recipeFilter.includes(r))){
                                return <Recipe recipe={recipe} setsavedRecipes={setsavedRecipes} />
                            } else if (recipeFilter.length===0) {
                                return <Recipe recipe={recipe} setsavedRecipes={setsavedRecipes} />
                            } else {
                                return <p></p>
                            }
                        } else {
                            return <p></p>
                        }
                    } else if (recipeDificulty.includes(recipe.Difficulty))  {
                        if (recipeMeal.includes(recipe.Meal)){
                            if (recipe.Tags.some(r=> recipeFilter.includes(r))){
                                return <Recipe recipe={recipe} setsavedRecipes={setsavedRecipes} />
                            } else if (recipeFilter.length===0) {
                                return <Recipe recipe={recipe} setsavedRecipes={setsavedRecipes} />
                            } else {
                                return <p></p>
                            }
                        } else if (recipeMeal.length===0) {
                            if (recipe.Tags.some(r=> recipeFilter.includes(r))){
                                return <Recipe recipe={recipe} setsavedRecipes={setsavedRecipes} />
                            } else if (recipeFilter.length===0) {
                                return <Recipe recipe={recipe} setsavedRecipes={setsavedRecipes} />
                            } else {
                                return <p></p>
                            }
                        } else {
                            return <p></p>
                        }
                    } else {
                        return <p></p>
                    }
                } else {
                    return <p></p>
                }
            })}
        </section>
    );
}
export default Recipes;