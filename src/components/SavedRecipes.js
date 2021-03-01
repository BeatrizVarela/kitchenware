

const SavedRecipes = ({savedOpen,setSavedOpen}) => {

    return(
        <div className={`saved-recipes${savedOpen ? '-show' : '-hidden'}`}>
            <button onClick={(() => setSavedOpen(false))}>Fecha-te Sésamo</button>
            {JSON.parse(localStorage.getItem("saved-recipes")).map((recipe)=> {
                return <h1>Ainda a trabalhar nesta parte :) Stay tuned!!!!</h1>
            })}
        </div>
    )
}

export default SavedRecipes;