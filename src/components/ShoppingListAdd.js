import { AiOutlineClose,AiOutlinePlus } from 'react-icons/ai'
import { CSSTransition } from 'react-transition-group'
import { useState } from 'react'

const ShoppingListAdd = ({addItemsOpen,setaddItemsOpen,shoppingState,setshoppingState}) => {

    const [recentlyAdded,setrecentlyAdded] = useState([]);

    const Close = () => {
        setrecentlyAdded([]);
        setaddItemsOpen(false);
    }


    const AddToShopList = () => {
        let name = document.getElementById("add-item-name").value;
        document.getElementById("add-item-name").value = ""
        let quantity = document.getElementById("add-item-quantity").value;
        document.getElementById("add-item-quantity").value = ""
        if (localStorage.getItem('shopping-list')){
            if (quantity > 0){
                let dict = {Name:name, Quantity:quantity}
                let recentArr = [...recentlyAdded]
                let shoppingArr = [...shoppingState]
                let i;
                let n;
                let foundSame = false;
                let foundSameShop = false;
                let recentquant;
                for (i = 0; i < recentArr.length; i++) {
                    if (recentArr[i].Name === name) {
                        recentArr[i].Quantity = Number(recentArr[i].Quantity) + Number(quantity)
                        recentquant = recentArr[i].Quantity;
                        foundSame = true;
                    }
                }
                for (n = 0; n < shoppingArr.length; n++) {
                    if (shoppingArr[n].Name === name) {
                        if (Number(shoppingArr[n].Quantity) !== Number(recentquant)){
                            shoppingArr[n].Quantity = Number(shoppingArr[n].Quantity) + Number(quantity)
                        }
                        foundSameShop = true;
                    }
                }
                if (!foundSameShop) {
                    if (!foundSame) {
                        recentArr.push(dict)
                        setrecentlyAdded(recentArr)
                        shoppingArr.push(dict)
                        setshoppingState(shoppingArr)
                        localStorage.setItem('shopping-list', JSON.stringify(shoppingArr))
                        } else {
                            setshoppingState(shoppingArr)
                            localStorage.setItem('shopping-list', JSON.stringify(shoppingArr))
                        }
                } else {
                    if (!foundSame){
                        recentArr.push(dict)
                        setrecentlyAdded(recentArr)
                        setshoppingState(shoppingArr)
                        localStorage.setItem('shopping-list',JSON.stringify(shoppingArr))
                    } else {
                        setshoppingState(shoppingArr)
                        localStorage.setItem('shopping-list',JSON.stringify(shoppingArr))
                    }
                    
                }

            }

        } else {
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
                    recentArr.push(dict)
                    setrecentlyAdded(recentArr)
                    let shoppingListDict = []
                    shoppingListDict.push(dict)
                    setshoppingState(shoppingListDict)
                    localStorage.setItem('shopping-list', JSON.stringify(shoppingListDict))
                } else {
                    let shoppingListDict = [...shoppingState]
                    setshoppingState(shoppingListDict)
                    localStorage.setItem('shopping-list', JSON.stringify(shoppingListDict))
                }
                
            } else {
                alert("Quantity needs to be above 1");
            }
        }
    }

    const RemoveFromList = (item) => {
        let list = document.getElementById(item.Name)
        list.classList.add("removing")
    }

    const RemoveAfterTransition = (item) => {
        let recent = [...recentlyAdded];
        let shopping = [...shoppingState];
        let shoppingStorage = [...JSON.parse(localStorage.getItem('shopping-list'))];
        let i_recent = recent.indexOf(item)
        let i_shopping = recent.indexOf(item)
        recent.splice(i_recent, 1)
        setrecentlyAdded(recent)
        let quant = Number(shopping[i_shopping].Quantity) - Number(item.Quantity)
        if (quant > 0){
            shopping[i_shopping].Quantity = quant
            setshoppingState(shopping)
            localStorage.setItem('shopping-list',JSON.stringify(shopping))
        } else{
            shopping.splice(i_shopping, 1)
            setshoppingState(shopping)
            shoppingStorage.splice(i_shopping, 1)
            if (shoppingStorage.length > 0) {
                localStorage.setItem('shopping-list', JSON.stringify(shoppingStorage));
            } else {
                localStorage.removeItem('shopping-list');
            }
        }

    }

    const RecentlyAddedShow = () => {
        if (recentlyAdded.length > 0){
            return recentlyAdded.map((item) => {
                return (
                    <ul id={item.Name} onTransitionEnd={() => RemoveAfterTransition(item)} key={item.Name} >
                        <li>{item.Name}</li>
                        <li>{item.Quantity}</li>
                        <li id="remove"><button onClick={() => RemoveFromList(item)} onTransitionEnd={() => RemoveAfterTransition(item)} id="remove-btn"><AiOutlineClose /></button></li>
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
                <div className="recently-added-show">
                    <RecentlyAddedShow />
                </div>
            </div>
        </div>
        </CSSTransition>
    )
}

export default ShoppingListAdd