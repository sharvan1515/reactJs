import React, { Component } from 'react';

class ComponentDidUpdate extends Component {

    constructor(props) {
        super(props);
        this.state = { username: 'user123' };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ username: 'user999' });
        }, 2000)
    }


    getSnapshotBeforeUpdate(props, PrevState) {

        document.getElementById('div1').innerHTML = `Before Update The value of username is ${PrevState.username}`;

    }

    componentDidUpdate() {
        document.getElementById('mydiv').innerHTML = `The Updated username value is ${this.state.username}`;
    }

    render() {
        return (
            <div>
                <h1>Username of user is  {this.state.username}</h1>
                <div id='div1'></div>
                <div id='mydiv'></div>
            </div>
        );
    }
}

export default ComponentDidUpdate;