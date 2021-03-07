import Recipe from './Recipe'
import { AiOutlineClose } from 'react-icons/ai'
import { CSSTransition } from 'react-transition-group'

const SavedRecipes = ({savedOpen,setSavedOpen,savedRecipes,setsavedRecipes}) => {

    const RecipesSaved = ({arrayLength}) => { //função que faz return a receita se estiver guardada ou a h1 com aquele texto se nao
        if (arrayLength>0) {
                return savedRecipes.map((recipe)=> {
                    return <Recipe recipe={recipe} setsavedRecipes={setsavedRecipes} />
                    })
        } else {
            return <h1 class="none">You don't have any recipes saved</h1>
        }
   }

    return(
        <CSSTransition
                in={savedOpen}
                timeout={300}
                classNames="recipes-fade"
                unmountOnExit
            >
        <div className="saved-recipes">
            <button onClick={(() => setSavedOpen(false))} id="close"><AiOutlineClose /></button>
            <h1 id="title">Saved Recipes</h1>
            <RecipesSaved arrayLength={savedRecipes ? savedRecipes.length : 0} />
        </div>
        </CSSTransition>
    )
}

export default SavedRecipes;