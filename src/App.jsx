// import './App.css';
import BurgerStack from './components/BurgerStack';
import IngredientList from './components/IngredientList';
import { useState } from 'react';
import '/src/index.css'; // Assuming your Tailwind styles are defined in index.css

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  const [stack, setStack] = useState([]);

  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient]);
  };

  const removeFromBurger = (index) => {
    setStack(stack.filter((_, a) => a !== index));
  };

  const resetBurger = () => {
    setStack([]);
  };

  return (
    <main className="w-full h-full bg-neutral-950 items-center p-5 flex flex-col">
      <h1 className="text-center mb-20 text-amber-200 text-4xl uppercase tracking-wide">
        My Burger Stacker
      </h1>
      <section className="w-full flex gap-5 justify-around">
        <div className="bg-neutral-600 rounded-lg p-4 w-1/2 flex flex-col items-center">
          <IngredientList ingredients={availableIngredients} addToBurger={addToBurger} />
        </div>
        <div className="bg-neutral-600 rounded-lg p-4 w-1/2 flex flex-col items-center">
          <BurgerStack stack={stack} removeFromBurger={removeFromBurger} />
          <button
            className="cursor-pointer bg-blue-500 py-3 px-5 rounded-lg mt-4"
            style={{ backgroundColor: '#fff7ed' }}
            onClick={resetBurger}
          >Reset Burger
          </button>
        </div>
      </section>
    </main>
  );
};

export default App;

