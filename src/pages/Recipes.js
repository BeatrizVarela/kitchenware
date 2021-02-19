import Recipe from "../components/Recipe"
import { Link, Router } from 'react-router-dom'
import "../styles/Recipes.scss"


const Recipes = ({ingAndRec}) => {


    return(
        <section className="recipes">
            <Link to="/">Back</Link>
            {ingAndRec.Recipes.map((recipe) => {
                return <Recipe recipe={recipe} />
            })}
        </section>
    );
}
export default Recipes;