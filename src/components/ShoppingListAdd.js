import { AiOutlineClose } from 'react-icons/ai'
import { CSSTransition } from 'react-transition-group'

const ShoppingListAdd = ({addItemsOpen,setaddItemsOpen}) => {
    return(
        <CSSTransition
                in={addItemsOpen}
                timeout={300}
                classNames="alert"
                unmountOnExit
            >
        <div className={`add-items ${addItemsOpen ? '' : 'closed'}`}>
            <button onClick={(() => setaddItemsOpen(false))} id="close"><AiOutlineClose /></button>
            <p>Olá</p>
        </div>
        </CSSTransition>
    )
}

export default ShoppingListAdd