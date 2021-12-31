import './App.css';
import React, {useState} from 'react';

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <h1>Hello World</h1>
      <input type="text" name="TextField" id="" />
    </div>
  );
}

export default App;
