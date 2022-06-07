import React from 'react'
import Car from './Car'

function Garage() {

    const carName = "BMW";

  return (
    <div>
        <h1>Our Garage Nam is vadodara Auto Service</h1>
        <Car brand = {carName} />
    </div>
  )
}

export default Garage