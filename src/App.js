import logo from './logo.svg';
import './App.css';

function App() {
  const helloClick = () =>{
    console.log('Hello !!!')
  };
  const plusNumber = (n) => {
    console.log('Number',n)
  }
  const onChangeName = (event) => {
 console.log(event.target.value)
  }
  return (
    <div className="App">
     <button onClick ={helloClick}>Hello</button>
      <button onClick={() => console.log('plus')}>Plus</button>
      <button onClick={() => plusNumber(123)}>Plus number</button>
        <hr/>

        <input onChange={onChangeName}/>
    </div>
  );
}

export default App;
