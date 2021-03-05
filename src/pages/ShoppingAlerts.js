import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import "../styles/ShoppingAlerts.scss"


const ShoppingAlerts = ({ingAndRec}) => {

    const SetIngAlert = () => {
        
    }


    return(
        <section className="shopping-alerts">
            <Link to="/" id="Back"><BiArrowBack /></Link>

        </section>
    );
}
export default ShoppingAlerts;