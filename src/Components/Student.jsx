import React from 'react'

function Student(props) {

    const myStyle = {
        backgroundColor: 'orange',
        color: 'white',
        padding: '5px 15px',
        border: 'none',
        borderRadius: "5px",
        marginRight: '10px'
    }

    const studentInfo = props.details;

    //console.log(studentInfo);
    console.log(props.sequenceNumber)
    return (
        <tr>
            <td>{props.sequenceNumber}</td>
            <td>{studentInfo.id}</td>
            <td>{studentInfo.name}</td>
            <td>{studentInfo.email}</td>
            <td>{studentInfo.mobile}</td>
            <td>
                <button type='button' style={myStyle}>Show</button>
                <button className='btn btn-primary'>Edit</button>
                <button className='btn btn-danger' style={{marginLeft: "10px"}}>Delete</button>
            </td>
        </tr>
    )
}

export default Student