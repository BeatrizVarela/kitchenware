import Recipe from "../components/Recipe"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { BsCalendar,BsFillBookmarkFill } from 'react-icons/bs'
import { RiHistoryFill } from 'react-icons/ri'
import "../styles/Recipes.scss"


const Recipes = ({ingAndRec}) => {

    const [recipeName,recipeNameOnChange] = useState("");
    const [recipeFilter, recipeFilterOnChange] = useState(null);
    const [recipeDificulty, setrecipeDificulty] = useState([])

    const dificultyChange = (event) => {
        let newList = [...recipeDificulty]
        if (newList.includes(event.target.value)){
            let index = newList.indexOf(event.target.value)
            newList.splice(index, 1);
        } else {
            newList.push(event.target.value)
        }
        setrecipeDificulty(newList)
        console.log(recipeDificulty)
    }


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
                <button onClick={(() => recipeFilterOnChange(null))}>Remove Filters</button>
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
                        return <Recipe recipe={recipe} />
                    } else if(recipeDificulty.includes(recipe.Difficulty)) {
                        return <Recipe recipe={recipe} />
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