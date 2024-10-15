

import React, { useState } from 'react';

function Increment() {
  const [count, setCount] = useState(1);
  const [buttons, setButtons] = useState([<Button key={0} onClick={() => handleIncrement()} />]);

  const handleIncrement = () => {
    setCount(count + 1);
    setButtons([...buttons, <Button key={count} onClick={() => handleDecrement()} />]);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
      setButtons(buttons.slice(0, -1));
    }
  };

  return (
    <div className='bg-green-500 mt-20 items-center space-x-8 text-center'>
      <p className='bg-red-600 text-white m-auto'>Count: {count}</p>
      <button onClick={handleIncrement} className='bg-blue-800 text-white p-4 px-2 rounded-lg hover:bg-black hover:text-white hover:rounded-2xl'>Increment</button>
      {buttons}
      <button onClick={handleDecrement} className='bg-blue-800 text-white p-4 rounded-lg hover:bg-black hover:text-white hover:rounded-2xl'>Decrement</button>
      
    </div>
  );
}

const Button = ({ onClick }) => {
  return <button onClick={onClick} className='bg-black text-white p-2 rounded-lg'>1</button>;
};

export default Increment;