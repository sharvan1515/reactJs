import React, { Component } from 'react';

class Child extends Component {

    componentWillUnmount() {
        alert('The Component is removed from DOM');
    }

    render() {
        return (
            <div>
                <p>This is Child Component</p>
            </div>
        );
    }
}

export default Child;