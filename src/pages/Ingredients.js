import { Link } from 'react-router-dom';
import '../styles/Ingredients.scss';
import data from '../data';
import { useState } from 'react';
import IngredientStock from '../components/IngredientStock';
import { BiArrowBack } from 'react-icons/bi';

const Ingredients = ({ ingAndRec }) => {
  const ings = data().Ingredients;
  const [activeFilter, setActiveFilter] = useState(false);
  const [type, setType] = useState();

  const FilteredIngredients = () => {
    return (
      <div className='ingredients-stock'>
        <ul>
          {ings
            .filter((ing) => ing.Type === type)
            .map((filteredIng) => (
              <li>
                <p>{filteredIng.Name}</p>
                <p>
                  {filteredIng.Quantity} {filteredIng.Measure}
                </p>
                <p>{filteredIng.Type}</p>
              </li>
            ))}
        </ul>
      </div>
    );
  };

  const FilterChecker = () => {
    if (!activeFilter) {
      return <IngredientStock />;
    } else {
      return <FilteredIngredients />;
    }
  };

  const FilterButtonPressed = (event) => {
    setActiveFilter(!activeFilter);
    setType(event.target.innerHTML);
    event.target.classList.toggle('Checked-filter');
  };

  return (
    <section className='ingredients'>
      <Link to='/' id='Back'>
        <BiArrowBack />
      </Link>

      <div className='filter'>
        <div className='filter-header'>
          <p>Filters</p>
        </div>
        <div className='filter-buttons'>
          <button onClick={FilterButtonPressed}>Spice</button>
          <button onClick={FilterButtonPressed}>Vegetable</button>
          <button onClick={FilterButtonPressed}>Fruit</button>
          <button onClick={FilterButtonPressed}>Meat</button>
          <button onClick={FilterButtonPressed}>Fish</button>
          <button onClick={FilterButtonPressed}>Garnish</button>
        </div>
      </div>

      <div className='table'>
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

        <FilterChecker />
      </div>
    </section>
  );
};

export default Ingredients;
