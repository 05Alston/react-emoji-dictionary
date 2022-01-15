import './App.css';
import React, {useState} from 'react';

function App() {
  var userName = "Emoji";
  var textColor = "red";

  const library = {
    "🍕": "Pizza",
    "🍔": "Burger",
    "🍟": "Fries",
    "🌭": "HotDog",
    "🍿": "Popcorn",
    "🥓": "Bacon",
    "🍨": "Ice-cream",
    "🥞": "Pancake",
    "🥖": "Baguette",
    "🌮": "Taco",
    "🥨": "Pretzel",
    "🥐": "Croissant",
    "🧇": "Waffle",
    "🥯": "Bagel",
  };
  var fastFood = Object.keys(library);
  var [elem, setElem] = useState("");
  function handleChange(event) {
    elem = library[event.target.value];
    if(elem === undefined){
      elem= "not found"
    }
    setElem(elem);
  }
  function inputClickHandler(i) {
      elem = library[i];
      setElem(elem);
  }

  return (
    <div className="App">
      <h1>
        <span style={{ color: textColor }}>{userName}</span> Dictionary
      </h1>
      <input onChange={handleChange}></input>
      <div className='input'> input is: {elem}</div>

      <ul style={{ padding: 0 }}>
        {fastFood.map((item,index) => {
          console.log(index);
          return (
            <li
              key={item}
              onClick={() => inputClickHandler(item)}
              style={{ display: "inline", padding: 15, fontSize: 40 }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
