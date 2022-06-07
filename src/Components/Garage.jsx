import React from 'react'
import Car from './Car'

function Garage() {

  const listOfCars = ['ABC','TYO','OPJK','BMW','MARUTI', 'JHJKHK'];

  return (
    <>
      <h2>List Of Cars</h2>
      <ul>
        {listOfCars.map((car) => <Car brand = {car} />)}

        {/* {listOfCars.map((car) => <li>{car}</li>)} */}
      </ul>
    </>
  )
}

export default Garage