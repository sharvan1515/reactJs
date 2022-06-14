import React from 'react'
import { useState } from 'react'

function Testing() {
    const [color, setColor] = useState('red');

    const [brand, setBrand]         = useState('BMW');
    const [model, setModel]         = useState('BMW16545');
    const [year, setYear]           = useState(2022);
    const [ownerName, setOwnerName] = useState('Sharvan');

    const [car, setCar] = useState({
        brand: "BMW",
        model: "BMW16545",
        year: 2022,
        ownerName: "Sharvan"
    });

    //console.log(color)

    const checkColor = () => {
        setColor('lightblue');
    }

    const updateColor = () => {
        setCar(prevState => {
            return {...prevState, brand: "800"};
        });
    }
    
  return (
    <div className='container mt-3'>
        <h2 className='text-center text-primary'>Hooks Example</h2>
        
        <ul>
            <li>Brand - {car.brand}</li>
            <li>Model - {car.model}</li>
            <li>Year - {car.year}</li>
            <li>Name - {car.ownerName}</li>

        </ul>

        <ul>
            <li>Brand - {brand}</li>
            <li>Model - {model}</li>
            <li>Year - {year}</li>
            <li>Name - {ownerName}</li>

        </ul>

        <p>Current Color Name is <span style={{color: color}}>{color}</span></p>

        <button type='buton' onClick={checkColor}>Change Color</button>

        <button 
            type='button'
            onClick={updateColor}
        >Color Change</button>

        <button
            type='button'
            onClick={() => setColor('Blue')}
        >
        Blue
        </button>

        <button
            type='button'
            onClick={() => setColor('green')}
        >
        Green
        </button>

        <button
            type='button'
            onClick={() => setColor('yellow')}
        >
        Yellow
        </button>

        <button
            type='button'
            onClick={() => setColor('orange')}
        >
        Orange
        </button>

        <button
            type='button'
            onClick={() => setColor('pink')}
        >
        Pink
        </button>

    </div>
  )
}

export default Testing

//4

// Form 

// Routing

//4
//Form  valida

//CRUD