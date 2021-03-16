import { Link } from 'react-router-dom';
import '../styles/Ingredients.scss';
import { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';


const Ingredients = ({ ingAndRec }) => {

  // use states
  const [activeFilter, setActiveFilter] = useState(false);  // activa ou desativa os filtros
  const [type, setType] = useState();  // muda o tipo de ingrediente consoante o filtro escolhido


  // funções

  // vai buscar a informação dos ingredientes ao ficheiro data.js
  const IngredientStock = () => {
    return (
      <div className='ingredients-stock'>
        <ul>
          {ingAndRec.Ingredients.map((ing) => (
            <li>
              <p id='stock-name'>{ing.Name}</p>
              <p id='stock-quantity'>
                {ing.Quantity} {ing.Quantity == 1 ? ing.Measure : ing.Measure + 's'}
              </p>
              <p id='stock-variety'>{ing.Variety}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // filtra os ingredientes
  const FilteredIngredients = () => {
    return (
      <div className='ingredients-stock'>
        <ul>
          {ingAndRec.Ingredients.filter((ing) => ing.Type === type).map((filteredIng) => (
              <li>
                <p id='stock-name'>{filteredIng.Name}</p>
                <p id='stock-quantity'>
                  {filteredIng.Quantity} {filteredIng.Quantity == 1? filteredIng.Measure : filteredIng.Measure + 's'}
                </p>
                <p id='stock-variety'>{filteredIng.Variety}</p>
              </li>
            )
          )}
        </ul>
      </div>
    );
  };

  // alterna a lista de ingredientes completa com lista filtrada
  const FilterChecker = () => {
    if (!activeFilter) {
      return <IngredientStock />;
    } else {
      return <FilteredIngredients />;
    }
  };

  // altera o tipo de filtro quando um botão é pressionado
  const FilterButtonPressed = (event) => {
    if (!activeFilter) {
      setActiveFilter(!activeFilter);
      setType(event.target.innerHTML);
      event.target.classList.toggle('Checked-filter');
    } else if (activeFilter && type === event.target.innerHTML) {
      setActiveFilter(!activeFilter);
      event.target.classList.toggle('Checked-filter');
      setType(null);
    } else if (activeFilter && type !== event.target.innerHTML) {
      document
        .getElementsByClassName('Checked-filter')[0]
        .classList.remove('Checked-filter');
      event.target.classList.toggle('Checked-filter');
      setType(event.target.innerHTML);
    }
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
          <button onClick={FilterButtonPressed}>Spices</button>
          <button onClick={FilterButtonPressed}>Vegetables</button>
          <button onClick={FilterButtonPressed}>Fruit</button>
          <button onClick={FilterButtonPressed}>Meat</button>
          <button onClick={FilterButtonPressed}>Fish</button>
          <button onClick={FilterButtonPressed}>Garnish</button>
          <button onClick={FilterButtonPressed}>Snacks</button>
          <button onClick={FilterButtonPressed}>Bread</button>
          <button onClick={FilterButtonPressed}>Dairy</button>
          <button onClick={FilterButtonPressed}>Alcohol</button>
        </div>
      </div>

      <div className='table'>
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
