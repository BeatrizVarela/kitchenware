import data from '../data';

const IngredientStock = () => {
  const ings = data().Ingredients;

  return (
    <div className='ingredients-stock'>
      <ul>
        {ings.map((ing) => (
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
  );
};

export default IngredientStock;
