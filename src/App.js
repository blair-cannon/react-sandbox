import {useState} from 'react';


function App() {
  const [count, setCount] = useState(0);
  const [flavor, setFlavor] = useState('Vanilla');


  function decreaseCount() {
    setCount(previousCount => previousCount - 1)
  }

  function increaseCount() {
    setCount(previousCount => previousCount + 1)
  }

  function chooseVanilla() {
    setFlavor('Vanilla')
  }

  function chooseChocolate() {
    setFlavor('Chocolate')
  }

  function chooseStrawberry() {
    setFlavor('Strawberry')
  }


  return (
   < >
    <button onClick={decreaseCount} > - </button>
    <div> {count} </div>
    <button onClick={increaseCount} > + </button>
    <br></br>
    <br></br>
    <button onClick={chooseVanilla}>Vanilla</button>
    <button onClick={chooseChocolate}>Chocolate</button>
    <button onClick={chooseStrawberry}>Strawberry</button>
    <h1> {flavor} </h1>
   </>
  );
}

export default App;
