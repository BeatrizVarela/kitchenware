import Recipe from "../components/Recipe"
import SavedRecipes from "../components/SavedRecipes"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { BsCalendar,BsFillBookmarkFill } from 'react-icons/bs'
import { RiHistoryFill } from 'react-icons/ri'
import "../styles/Recipes.scss"



const Recipes = ({ingAndRec}) => {

    const [recipeName,recipeNameOnChange] = useState("");
    const [recipeFilter, setrecipeFilter] = useState([]);
    const [recipeDificulty, setrecipeDificulty] = useState([])
    const [savedOpen, setSavedOpen] = useState(false);

    var savedRecipes = []

    const dificultyChange = (event) => {
        let newList = [...recipeDificulty]
        if (newList.includes(event.target.value)){
            let index = newList.indexOf(event.target.value)
            newList.splice(index, 1);
        } else {
            newList.push(event.target.value)
        }
        setrecipeDificulty(newList)
    }

    const recipeFilterOnChange = (e) => {
        let filter = e.target.innerHTML;
        let newRecipeFilterList = [];
        /*if (newRecipeFilterList.includes(filter)) {
            let i = newRecipeFilterList.indexOf(filter);
            newRecipeFilterList.splice(i, 1);
        } else {
            
        }*/
        if (filter === 'Remove Filters'){
            newRecipeFilterList = []
        } else {
            newRecipeFilterList.push(filter)
        }

        setrecipeFilter(newRecipeFilterList);
    }

    if (localStorage.getItem("saved-recipes")){
        savedRecipes = localStorage.getItem("saved-recipes")
    } 

    return(
        <section className="recipes">
            <Link to="/">Back</Link>
            <div className="search-bar">
                <label htmlFor="search">Search:</label>
                <input type="text" value={recipeName} onChange={(e) => recipeNameOnChange(e.target.value)} />
            </div>
            <div className="functionalities">
                <button className="left-meals-buttons" id="week">
                    <BsCalendar />
                    <br />
                    This Week
                </button>
                <br />
                <button className="left-meals-buttons" id="past">
                    <RiHistoryFill />
                    <br />
                    Past Meals
                </button>
                <br />
                <button className="left-meals-buttons" id="saved" onClick={(() => setSavedOpen(!(savedOpen)))}>
                    <BsFillBookmarkFill />
                    <br />
                    Saved Meals
                </button>
                <SavedRecipes savedOpen={savedOpen} setSavedOpen={setSavedOpen}/>
            </div>
            <div className="filters">
                <button onClick={recipeFilterOnChange}>Remove Filters</button>
                <p>Filtros aqui</p>
                <button onClick={recipeFilterOnChange}>Vegetarian</button>
                <button onClick={recipeFilterOnChange}>Meat</button>
                <button onClick={recipeFilterOnChange}>Lactose</button>
                <button onClick={recipeFilterOnChange}>Pasta</button>
                <div className="difficulty-change">
                    <h4>Dificulty filter</h4>
                    <label>Easy</label><input type="checkbox" onClick={dificultyChange} value="Easy"/>
                    <label>Medium</label><input type="checkbox" onClick={dificultyChange} value="Medium" />
                    <label>Hard</label><input type="checkbox" onClick={dificultyChange} value="Hard" />
                </div>
            </div>
            {ingAndRec.Recipes.map((recipe) => {
                if (recipe.Name.toUpperCase().indexOf(recipeName.toUpperCase()) > -1) {
                    if (recipeDificulty.length===0){
                        if (recipe.Tags.some(r=> recipeFilter.includes(r)) & recipeFilter.length===1){
                            return <Recipe recipe={recipe} />
                        } else if (recipeFilter.length===0) {
                            return <Recipe recipe={recipe} />
                        } else {
                            return <p></p>
                        }
                    } else if (recipeDificulty.includes(recipe.Difficulty))  {
                        if (recipe.Tags.some(r=> recipeFilter.includes(r)) & recipeFilter.length===1){
                            return <Recipe recipe={recipe} />
                        } else if (recipeFilter.length===0) {
                            return <Recipe recipe={recipe} />
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