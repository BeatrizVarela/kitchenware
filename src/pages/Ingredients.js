import { Link } from 'react-router-dom';
import '../styles/Ingredients.scss';

const Ingredients = () => {
  return (
    <section className='ingredients'>
      <Link to='/'>Back</Link>

      <div></div>

      <div className='ingredients-stock'>
        <ul>
          <li>Garlic</li>
          <li>Potatos</li>
          <li>Salt</li>
        </ul>
      </div>
    </section>
  );
};
export default Ingredients;
