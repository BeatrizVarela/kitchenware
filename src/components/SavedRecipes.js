import Recipe from './Recipe'

const SavedRecipes = ({savedOpen,setSavedOpen,savedRecipes}) => {
    /*
                {JSON.parse(localStorage.getItem("saved-recipes")).map((recipe)=> {
                return <h1>Ainda a trabalhar nesta parte :) Stay tuned!!!!</h1>
            })}

                {savedRecipes.map((recipe)=> {
                return <h1>Ainda a trabalhar nesta parte :) Stay tuned!!!!</h1>
            })}
    */ 

    const Test = ({arrayLength}) => {
        //setsavedRecipes(JSON.parse(localStorage.getItem("saved-recipes")));
        if (arrayLength>0) {
                return savedRecipes.map((recipe)=> {
                    return <Recipe recipe={recipe} />
                    })
        } else {
            return <h1>You don't have any recipes saved</h1>
        }
   }

    return(
        <div className={`saved-recipes${savedOpen ? '-show' : '-hidden'}`}>
            <button onClick={(() => setSavedOpen(false))}>Fecha-te Sésamo</button>
            <Test arrayLength={savedRecipes.length} />
        </div>
    )
}

export default SavedRecipes;