import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  const [amount, setAmount] = useState(0)

  const addOne = () => {
    amount === 0 ? setCounter(counter + 1):setCounter(counter + amount)
  }

  const subOne = () => {
    setCounter(counter - 1)
  }

  const commander = () => {
    setCounter(40)
    setAmount(0)
  }
  
  const standard = () => {
    setCounter(20)
    setAmount(0)
  }

  const value = (e) => {
    console.log(amount)
    setAmount(Number(e.target.value))
  }

  return (
    <div className="App">
      <button onClick={commander}>Commander</button>
      <button onClick={standard}>Standard</button>
      <p>{counter}</p>
      <input value={amount} onChange={e => value(e)} />
      <button onClick={addOne}>+</button>
      <button onClick={subOne}>-</button>
    </div>
  );
}

export default App;
