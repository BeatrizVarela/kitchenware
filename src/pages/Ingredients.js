import { Link } from 'react-router-dom';
import '../styles/Ingredients.scss';

const Ingredients = ({ ingAndRec }) => {

  //buttonPressed() = 

  return (
    <section className='ingredients'>
      <Link to='/'>Back</Link>

      <div className='table'>
        <div className='filter'>
          <div className='filter-header'>
            <h5>Filters</h5>
          </div>
          <div className='filter-buttons'>
            <button onClick='buttonPressed()'>Spices</button>
            <button>Vegetables</button>
            <button>Fruit</button>
            <button>Meat</button>
            <button>Fish</button>
            <button>Garnish</button>
          </div>
        </div>
        <div className='bars'></div>
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
            {ingAndRec.Ingredients.map((ing) => (
              <li>
                <p id='stock-name'>{ing.Name}</p>
                <p id='stock-quantity'>
                  {ing.Quantity} {ing.Measure}
                </p>
                <p id='stock-variety'>{ing.Type}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

/*

<button type='button' class='btn btn-danger'>Danger</button>
*/

export default Ingredients;
