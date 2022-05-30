import React, { Component } from 'react'

class Employee extends Component {

    constructor(props) {
        super(props);

        this.state = {
            joining_date: "2022-01-01",
            dept: "PHP",
            company_name: "XYZ",
            dob: "2010-10-10",
            nameE: '',
            isLoaded: false,
            items: []
        };
    }

    // changeInfo() {
    //     alert('Hello This is Changed Info');
    // }

    // static getDerivedStateFromProps(props, state) {
    //     return {dept: props.dpt};
    // }

    componentDidMount() {

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        }
        )
    }

    nameData = (e) => {
        //console.log(e.target.value);

        if(e.target.value=='') {
            this.setState({nameE: "Name Can Not  be blank"});
        } else {
            this.setState({nameE: ""});
        }
    }

    changeInfo = () => {

        let joiningDate = prompt('Enter joining Date');
        let deptName = prompt('Dept Name');
        let companyName = prompt('Company Name');
        let doB = prompt('DOB');

        console.log(joiningDate, deptName, companyName, doB);

        this.setState({
            joining_date: joiningDate,
            dept: deptName,
            company_name: companyName,
            dob: doB
        });
    }
    render() {
        console.log(this.state.items);
        return(
            <div>
                <h2>Hi</h2>

                <ul>
                    <li>joining Date: {this.state.joining_date}</li>
                    <li>Dept: {this.state.dept}</li>
                    <li>Company Name: {this.state.company_name}</li>
                    <li>DOB: {this.state.dob}</li>
                </ul>

                <input type="email" name="name" id="name" placeholder='name' onChange={this.nameData} />
                <span>{this.state.nameE}</span>
                <button 
                    type="button"
                    onClick={this.changeInfo}
                    >Change Info</button>
                
                <table>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                    
                    {this.state.items.map((item) => <tr key={item.id}>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                    </tr>
                    )}


                    {/* <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr> */}

                </table>
            </div>
        )
    }
}

export default Employee;