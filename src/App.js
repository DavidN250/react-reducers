
import { useReducer } from 'react';
import './App.css';
import Post from './Components/Post';

function reducer(state, action) {
  
}

function App() {

  const [state, dispatch] = useReducer(reducer, { counter: 0, horizontalCounter: 0})

  return (
    <div className="App">
      <Post/>
    </div>
  );
}

export default App;
