import { Link } from 'react-router-dom';
import '../styles/Ingredients.scss';

const Ingredients = () => {
  return (
    <section className='ingredients'>
      <Link to='/'>Back</Link>

      <div className='header'>
        <ul>
          <li id='header-name'>
            <p>Name</p>
          </li>
          <li id='header-quantity'>
            <p>Quantity</p>
          </li>
          <li id='header-variety'>
            <p>Variety</p>
          </li>
        </ul>
      </div>

      <div className='ingredients-stock'>
        <ul>
          <li>
            <p id="stock-name">Garlic</p>
            <p id="stock-quantity">6</p>
            <p id="stock-variety"></p>
          </li>
          <li>
            <p id="stock-name">Potatoes</p>
            <p id="stock-quantity">12</p>
            <p id="stock-variety">Red</p>
          </li>
          <li>
            <p id="stock-name">Salt</p>
            <p id="stock-quantity">1 Kg</p>
            <p id="stock-variety">Coarse Salt</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Ingredients;
