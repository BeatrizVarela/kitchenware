import { Link } from 'react-router-dom';
import '../styles/Ingredients.scss';
import data from '../data';
import { useState } from 'react';
import IngredientStock from '../components/IngredientStock';

const Ingredients = ({ ingAndRec }) => {
  const ings = data().Ingredients;
  const [activeFilter, setActiveFilter] = useState(false);

  const ingredientsFilter = () => {
    <ul>
      {ings.filter((ing) => ing.Type === 'Spice').map((filteredIng) => (
          <li>
            <p>{filteredIng.Name}</p>
            <p>
              {filteredIng.Quantity} {filteredIng.Measure}
            </p>
            <p>{filteredIng.Type}</p>
          </li>
        ))}
    </ul>;

    setActiveFilter(!activeFilter);
  };

  return (
    <section className='ingredients'>
      <Link to='/'>Back</Link>

      <div className='table'>
        <div className='filter'>
          <div className='filter-header'>
            <h5>Filters</h5>
          </div>
          <div className='filter-buttons'>
            <button>Spices</button>
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
        <IngredientStock />
        
      </div>
    </section>
  );
};

export default Ingredients;
