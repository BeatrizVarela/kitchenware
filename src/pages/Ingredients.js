import { Link } from 'react-router-dom';
import '../styles/Ingredients.scss';
import { useState } from 'react';
import data from '../data';

const Ingredients = () => {
  const ingredients = data().Ingredients;
  const [ings, setIngs] = useState(data().Ingredients);

  console.log(ings.length)
  /*var keys = Object.keys(ingredients);
  console.log(keys);*/

  return (
    <div className='test'>
      {ings.map((ing) => (
        <div className='parent'>
          <p>{Object.keys(ing)[0]}</p>
          <p>
            {ing.Garlic.Quantity} {ing.Garlic.Measure}
          </p>
          <p>{ing.Garlic.Type}</p>
        </div>
      ))}
    </div>
  );
};

/*const Ingredients = () => {
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
            <p id='stock-name'>Garlic</p>
            <p id='stock-quantity'>6</p>
            <p id='stock-variety'></p>
          </li>
          <li>
            <p id='stock-name'>Potatoes</p>
            <p id='stock-quantity'>12</p>
            <p id='stock-variety'>Red</p>
          </li>
          <li>
            <p id='stock-name'>Salt</p>
            <p id='stock-quantity'>1 Kg</p>
            <p id='stock-variety'>Coarse Salt</p>
          </li>
        </ul>
      </div>
    </section>
  );
};*/

/*const G = (ingAndRec) => {
  return (
    <div className='gg'>
      <p>ingAndRec.Ingredients</p>
    </div>
  );
};*/

/*{ingAndRec.Ingredients.map((ing) => {
  if (ing.Quantity > 0) {
      <p>{ing.Type}</p>
  } else {
      return <p></p>
  }
})}*/

export default Ingredients;
