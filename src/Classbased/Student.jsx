import React, { Component } from 'react'

class Student extends Component {

    constructor() {
        super();
        this.profile = { name: "Sharvan kumar", email: "s@gmail.com", rollNo: "1544" };
    }

    render() {
        return (
            <>
                <h2>Hello This is Student Profile section and Student Name is {this.profile.name} </h2>
                <h2>Hello This is Student Profile section and Student Email is {this.profile.email} </h2>
                <h2>Hello This is Student Profile section and Student Roll No is {this.profile.rollNo} </h2>
            </>
        )
    }
}

export default Student