import { Link } from 'react-router-dom';
import '../styles/Ingredients.scss';

const Ingredients = ({ ingAndRec }) => {
  return (
    <section className='ingredients'>
      <Link to='/'>Back</Link>

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

      <div className='filter'></div>
    </section>
  );
};

export default Ingredients;
