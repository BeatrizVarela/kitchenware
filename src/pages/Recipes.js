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
    const [recipeDificulty, setrecipeDificulty] = useState([])
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
            <Link to="/"><BiArrowBack id="Back" /></Link>
            <div className="search-bar">
                <label htmlFor="search">Search:</label>
                <input type="text" value={recipeName} onChange={(e) => recipeNameOnChange(e.target.value)} />
            </div>
            <div className="functionalities">
                <div className="button-combo">
                    <button className="left-meals-buttons" id="week">
                        <BsCalendar />
                    </button>
                    <br />
                    <p>This Week</p>
                    <br />
                </div>
                <div className="button-combo">
                    <button className="left-meals-buttons" id="past">
                        <RiHistoryFill />
                    </button>
                    <br />
                    <p>Past Meals</p>
                    <br />
                </div>
                <div className="button-combo">
                    <button className="left-meals-buttons" id="saved" onClick={(() => setSavedOpen(!(savedOpen)))}>
                        <BsFillBookmarkFill />
                    </button>
                    <br />
                    <p>Saved Meals</p>
                </div>
            </div>
            <SavedRecipes savedOpen={savedOpen} setSavedOpen={setSavedOpen} savedRecipes={savedRecipes}/>
            <div className="filters">
                <button onClick={recipeFilterOnChange}>Remove Filters</button>
                <p>Filtros aqui</p>
                <button onClick={recipeFilterOnChange}>Vegetarian</button>
                <button onClick={recipeFilterOnChange}>Meat</button>
                <button onClick={recipeFilterOnChange}>Lactose</button>
                <button onClick={recipeFilterOnChange}>Pasta</button>
                <div className="difficulty-change">
                    <h4>Dificulty filter</h4>
                    <button onClick={dificultyChange}>Easy</button>
                    <button onClick={dificultyChange}>Medium</button>
                    <button onClick={dificultyChange}>Hard</button>
                </div>
            </div>
            {ingAndRec.Recipes.map((recipe) => {
                if (recipe.Name.toUpperCase().indexOf(recipeName.toUpperCase()) > -1) { //Search-bar
                    if (recipeDificulty.length===0){
                        if (recipe.Tags.some(r=> recipeFilter.includes(r))){
                            return <Recipe recipe={recipe} setsavedRecipes={setsavedRecipes} />
                        } else if (recipeFilter.length===0) {
                            return <Recipe recipe={recipe} setsavedRecipes={setsavedRecipes} />
                        } else {
                            return <p></p>
                        }
                    } else if (recipeDificulty.includes(recipe.Difficulty))  {
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
            })}
        </section>
    );
}
export default Recipes;