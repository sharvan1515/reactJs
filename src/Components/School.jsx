import React from 'react'
import Student from './Student';

function School() {
    
    const students = [
        {id: 100, name: 'Sharvan', email: 's@gmail.com', mobile: 9835401515},
        {id: 2, name: 'Rahul',   email: 's@gmail.com', mobile: 9835401515},
        {id: 3, name: 'Rharvan', email: 's@gmail.com', mobile: 9835401515},
        {id: 4, name: 'Kharvan', email: 's@gmail.com', mobile: 9835401515},
        {id: 5, name: 'Pharvan', email: 's@gmail.com', mobile: 9835401515},
        {id: 6, name: 'Uharvan', email: 's@gmail.com', mobile: 9835401515},
        {id: 7, name: 'Zharvan', email: 's@gmail.com', mobile: 9835401515},
        {id: 8, name: 'Iharvan', email: 's@gmail.com', mobile: 9835401515},
        {id: 9, name: 'Uharvan', email: 's@gmail.com', mobile: 9835401515},
    ];
    
    //console.log(students);
  return (
    <div className='container'>
        <h1 className='text-center text-primary'>List of Students</h1>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Sr.No</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student, index) => <Student key = {student.id} details = {student} sequenceNumber={index+1}/> )}
            </tbody>
            {/* <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody> */}
        </table>
    </div>
  )
}

export default School