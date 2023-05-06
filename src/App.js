
import { useReducer } from 'react';
import './App.css';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {counter: state.counter + 1}
    case 'horizontalIncrement':
      return { horizontalCounter: state.horizontalCounter + 1 }
    case 'decrement':
      return {counter: state.counter - 1}
    case 'horizontalDecrement':
      return { horizontalCounter: state.horizontalCounter - 1 }
    default:
      throw new console.error();
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, { counter: 0, horizontalCounter: 0})

  return (
    <div className="App">

     <center><div className="play-ground">
      <div id='ball'></div>
        <div className="score">{state.counter}</div>
        <div className="score3">{state.horizontalCounter}</div>

      </div>
      </center>
      <div className="keys">
        <div className="up arr" onClick={(()=>dispatch({type:'increment'}))}><i className="fa fa-arrow-up"></i></div>
        <br />
        <div className="left arr" onClick={(() => dispatch({ type: 'horizontalDecrement' }))}><i className="fa fa-arrow-left"></i></div>
        <div className="down arr" onClick={(() => dispatch({ type: 'decrement' }))}><i className="fa fa-arrow-down"></i></div>
        <div className="right arr" onClick={(() => dispatch({ type: 'horizontalIncrement' }))}><i className="fa fa-arrow-right"></i></div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="names">
        <div className="uptext"></div>
        <div className="downtext"></div>
        <div className="lefttext"></div>
        <div className="righttext"></div>
        <div className="b"></div>
        <div className="a"></div>
      </div>
    </div>
  );
}

export default App;
