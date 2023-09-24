import React from 'react'
import '../styles/App.css';
import { useState, useEffect } from 'react';
const App = () => {
//code here 
 const [id, setID] = useState[1];
 const [name, setName] = useState['']
 
useEffect(() => {   
    fetch(`https://content.newtonschool.co/v1/pr/main/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);
 
function changeInput(e) {
  const newId = parseInt(e.target.value, 10);
    if (!isNaN(newId) && newId >= 1 && newId <= 10) {
      setId(newId);
    }
}

  return (
    <div className="App">
      <h1 id="text">Type a number between 1 and 10</h1>
      <input id="input" onChange={changeInput} />
      <p id="name">{name}</p>
    </div>
  );
}


export default App;
