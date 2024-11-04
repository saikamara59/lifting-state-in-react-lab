const IngredientList = ({ingredients,addToBurger}) => {
    return (
      <div className='w-24.5 h-24.5 items-center p-5 flex flex-col'>
        <h2 className="text-2xl text-primary text-center mb-4">Available Ingredients</h2>
        <ul className="list-none border-solid m-0 p-2.5 w-full max-h-screen flex flex-col gap-2">
          {ingredients.map((ingredient, index) => (
            <li className="rounded-md drop-shadow-xl font-bold flex items-center justify-center #fff7ed curor-pointer transition"
              key={index} 
              style={{ backgroundColor: ingredient.color, padding: '8px', margin: '4px', cursor: 'pointer'}}
              onClick={() => addToBurger(ingredient)}>{ingredient.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default IngredientList;
  