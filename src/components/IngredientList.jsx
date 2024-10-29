const IngredientList = ({ingredients,addToBurger}) => {
    return (
      <div>
        <h2>Available Ingredients</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li 
              key={index} 
              style={{ backgroundColor: ingredient.color, padding: '8px', margin: '4px', cursor: 'pointer' }}
              onClick={() => addToBurger(ingredient)}
            >
              {ingredient.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default IngredientList;
  