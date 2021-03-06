import { AiOutlineClose,AiOutlinePlus } from 'react-icons/ai'
import { CSSTransition } from 'react-transition-group'
import { useState } from 'react'

const ShoppingListAdd = ({addItemsOpen,setaddItemsOpen,shoppingState,setshoppingState}) => {

    const [recentlyAdded,setrecentlyAdded] = useState([]);

    const Close = () => {
        setrecentlyAdded([]);
        setaddItemsOpen(false);
    }

    //AMANHÃ ARRANJAR O FACTO DE QUANDO SE ADICIONA ALGO QUE JÁ ESTÁ NA SHOPPING LISTA CRIA UMA NOVA LINHA

    const AddToShopList = () => {
        let name = document.getElementById("add-item-name").value;
        document.getElementById("add-item-name").value = ""
        let quantity = document.getElementById("add-item-quantity").value;
        document.getElementById("add-item-quantity").value = ""
        if (quantity > 0){
            let dict = {Name:name, Quantity:quantity}
            let recentArr = [...recentlyAdded]
            let i;
            let foundSame = false;
            for (i = 0; i < recentArr.length; i++) {
                if (recentArr[i].Name === name) {
                    recentArr[i].Quantity = Number(recentArr[i].Quantity) + Number(quantity)
                    foundSame = true;
                }
            }
            if (!foundSame) {
                console.log("Did not found same")
                recentArr.push(dict)
                setrecentlyAdded(recentArr)
                if (localStorage.getItem('shopping-list')) {
                    let shoppingListDict = [...shoppingState]
                    shoppingListDict.push(dict)
                    setshoppingState(shoppingListDict)
                    localStorage.setItem('shopping-list', JSON.stringify(shoppingListDict))
                } else {
                    let shoppingListDict = []
                    shoppingListDict.push(dict)
                    setshoppingState(shoppingListDict)
                    localStorage.setItem('shopping-list', JSON.stringify(shoppingListDict))
                }
            } else {
                let shoppingListDict = [...shoppingState]
                setshoppingState(shoppingListDict)
                localStorage.setItem('shopping-list', JSON.stringify(shoppingListDict))
            }
            
        } else {
            alert("Quantity needs to be above 1");
        }
    }

    const RemoveFromList = (item) => {
        let recent = [...recentlyAdded];
        let shopping = [...shoppingState];
        let shoppingStorage = [...JSON.parse(localStorage.getItem('shopping-list'))];
        recent.splice(item, 1)
        setrecentlyAdded(recent)
        shopping.splice(item, 1)
        setshoppingState(shopping)
        shoppingStorage.splice(item, 1)
        if (shoppingStorage.length > 0) {
            localStorage.setItem('shopping-list', JSON.stringify(shoppingStorage));
        } else {
            localStorage.removeItem('shopping-list');
        }

    }

    const RecentlyAddedShow = () => {
        if (recentlyAdded.length > 0){
            return recentlyAdded.map((item) => {
                return (
                    <ul>
                        <li>{item.Name}</li>
                        <li>{item.Quantity}</li>
                        <li id="remove"><button onClick={() => RemoveFromList(item)}>Remove</button></li>
                    </ul>
                )
            })
        } else {
            return <h3 id="none">You have no items added</h3>
        }
    }

    return(
        <CSSTransition
                in={addItemsOpen}
                timeout={300}
                classNames="alert"
                unmountOnExit
            >
        <div className={`add-items ${addItemsOpen ? '' : 'closed'}`}>
            <h1>Add Items to Shopping List</h1>
            <button onClick={Close} id="close"><AiOutlineClose /></button>
            <div className="add-item">
                <input type="text" placeholder="Name" id="add-item-name" />
                <input type="number" placeholder="Quantity" id="add-item-quantity" />
                <button onClick={AddToShopList} id="add"><AiOutlinePlus /></button>
            </div>
            <br />
            <h2>Items to add:</h2>
            <div className="recently-added">
                <ul id="title">
                    <li>Name</li>
                    <li>Quantity</li>
                    <li>Remove</li>
                </ul>
                <RecentlyAddedShow />
            </div>
        </div>
        </CSSTransition>
    )
}

export default ShoppingListAdd