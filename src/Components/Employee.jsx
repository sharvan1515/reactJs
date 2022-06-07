import React from 'react'

function Employee(props) {
    const employees = props.listOFEmployee;
    //console.log(employees);
    //console.log(employees.length)
  return (
    <div>
        <h1>List Of Employee</h1>

        {
            employees.length>0 && 

            <p>Total Employee is {employees.length}</p>
            
        }


    </div>
  )
}

export default Employee