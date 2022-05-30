import React, { Component } from 'react';

class ShouldUpdate extends Component {

    constructor(props) {
        super(props);
        this.state = {companyName: "TCS"};
    }

    shouldComponentUpdate() {
        return true;
    }

    changeCompanyName = () => {
        
        this.setState({companyName: "Softnice"});

    }

    render() {
        return (
            <div>
               <h1>Working</h1> 
                <p>Cuuret Company Name is  {this.state.companyName}</p>
            <button
                type='button'
                onClick={this.changeCompanyName}
            >
                Compnay
            </button>

            </div>
        );
    }
}

export default ShouldUpdate;