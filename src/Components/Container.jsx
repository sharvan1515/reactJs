import React, { Component } from 'react';
import Child from './Child';

class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {show: true};
    }

    delHeder = () => {
        this.setState({show: false});
    }

    render() {
        let myHeader;

        const make = 'Ford';
const model = 'Mustang';
const car = { make, model };
console.log(car);

        if(this.state.show) {
            myHeader = <Child />
        }
        return (
            <div>
                {myHeader}
                <button type='button' onClick={this.delHeder}>Unmount</button>
            </div>
        );
    }
}

export default Container;