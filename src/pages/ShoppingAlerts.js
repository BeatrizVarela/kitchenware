import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import "../styles/ShoppingAlerts.scss"


const ShoppingAlerts = ({ingAndRec}) => {

    const ShoppingList = () => {
        if (localStorage.getItem('shopping-list')) {
            let shoppingList = JSON.parse(localStorage.getItem('shopping-list'));
            if (shoppingList.length) {
                shoppingList.map((item) => {
                    return (
                        <ul id="shopping-list-content">
                            <li>{item.Name}</li>
                            <li>{item.Quantity}</li>
                        </ul>
                        )
                })
            }
        } else {
            return (
                <h1 id="none">You do not have any items in your shopping list</h1>
                )
        }
        
    }


    return(
        <section className="shopping-alerts">
            <Link to="/" id="Back"><BiArrowBack /></Link>
            <div className="shopping-list">
                <h1>Shopping List</h1>
                <ul id="shopping-list-header">
                    <li>Name</li>
                    <li>Quantity</li>
                </ul>
                <ShoppingList />
            </div> 
        </section>
    );
}
export default ShoppingAlerts;