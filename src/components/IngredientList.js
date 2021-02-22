import { useState } from "react"
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'


const IngredientList = ({ingredient}) => {

    const [ingredientCheck,setingredientCheck] = useState(false);

    return(
        <div id="ingredient-list">
            <p id={`ingredient${ingredientCheck ? '-checked':''}`} onClick={(() => setingredientCheck(!(ingredientCheck)))}>{ingredientCheck ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} {ingredient} </p>
        </div>
    );
}

export default IngredientList;