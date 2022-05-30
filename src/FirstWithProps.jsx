import React from 'react'

function FirstWithProps(props) {

    console.log(props);
  return (
    <div>My First Name is {props.firstName} {props.lastName}</div>
  )
}

export default FirstWithProps