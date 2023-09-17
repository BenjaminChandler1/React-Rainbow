import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Make sure to import the component we just built:
import ColorBlock from './ColorBlock.js';
import ColorForm from './ColorForm.js';

function App(){
  const [input,setInput] = useState();
    const [colors, setColors] = useState([
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ])
    
    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock color={color} />
        )
    })

    const addColor = (newColor) => {
        setColors([...colors, newColor])
    }

    return (
        <div className="App">
            {colorMap}
            <ColorForm addColor={addColor} />
        </div>
    )

}

export default App;