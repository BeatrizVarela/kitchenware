import { useState } from 'react'

const SavedRecipes = ({savedOpen,setSavedOpen}) => {
    /*
                {JSON.parse(localStorage.getItem("saved-recipes")).map((recipe)=> {
                return <h1>Ainda a trabalhar nesta parte :) Stay tuned!!!!</h1>
            })}

                {savedRecipes.map((recipe)=> {
                return <h1>Ainda a trabalhar nesta parte :) Stay tuned!!!!</h1>
            })}
    */

   const [savedRecipes,setsavedRecipes] = useState(JSON.parse(localStorage.getItem("saved-recipes")));

    return(
        <div className={`saved-recipes${savedOpen ? '-show' : '-hidden'}`}>
            <button onClick={(() => setSavedOpen(false))}>Fecha-te Sésamo</button>

        </div>
    )
}

export default SavedRecipes;