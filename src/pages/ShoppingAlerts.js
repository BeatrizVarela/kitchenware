import { Link } from 'react-router-dom'
import { BiArrowBack, BiListCheck } from 'react-icons/bi'
import { BsPlusSquare } from 'react-icons/bs'
import { useState } from 'react'
import "../styles/ShoppingAlerts.scss"
import ShoppingListAdd from "../components/ShoppingListAdd"


const ShoppingAlerts = ({ingAndRec}) => {

    const [shoppingState,setshoppingState] = useState(JSON.parse(localStorage.getItem('shopping-list')));
    const [addItemsOpen,setaddItemsOpen] = useState(false);

    const ShoppingList = () => {
        //localStorage.setItem('shopping-list', JSON.stringify([{Name:"AHHHH", Quantity:2}, {Name:"Cala-te", Quantity:50},{Name:"Cala-te", Quantity:50},{Name:"Cala-te", Quantity:50},{Name:"Cala-te", Quantity:50},{Name:"Cala-te", Quantity:50},{Name:"Cala-te", Quantity:50},{Name:"Cala-te", Quantity:50},]));
        if (localStorage.getItem('shopping-list')) {
            let shoppingList = JSON.parse(localStorage.getItem('shopping-list'));
            if (shoppingList.length) {
                return shoppingState.map((item) => {
                    return (
                        <ul id="shopping-list-content">
                            <li id="shop-name">{item.Name}</li>
                            <li>{item.Quantity}</li>
                        </ul>
                        );
                })
            } else {
                return (
                    <h1 id="none">You do not have any items in your shopping list</h1>
                    )
            }
        } else {
            return (
                <h1 id="none">You do not have any items in your shopping list</h1>
                )
        }
        
    }

    const ClearShoppingList = () => {
        localStorage.removeItem('shopping-list')
        setshoppingState([]);

    }



    return(
        <section className="shopping-alerts">
            <Link to="/" id="Back"><BiArrowBack /></Link>
            <div className="shopping-list-add">
                <button onClick={() => setaddItemsOpen(true)}><BsPlusSquare /></button>
                <h3>Add items to the Shopping List</h3>
            </div>
            <ShoppingListAdd addItemsOpen={addItemsOpen} setaddItemsOpen={setaddItemsOpen} />
            <div className="shopping-list">
                <h1 id="title">Shopping List</h1>
                <ul id="shopping-list-header">
                    <li>Name</li>
                    <li>Quantity</li>
                </ul>
                <ShoppingList />
            </div>
            <div className="shopping-list-clear">
                <button onClick={ClearShoppingList}><BiListCheck /></button>
                <h3>Shopping list done</h3>
            </div>
        </section>
    );
}
export default ShoppingAlerts;