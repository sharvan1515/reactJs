import React, { Component } from 'react';

class ClassUpdateDerived extends Component {

    constructor(props) {
        super(props);
        this.state = {oldName: "Kumar"};
    }

    static getDerivedStateFromProps(props, state) {
        
        return {oldName: props.oldName};
    }
    
    changeName = () => {
        
        this.setState({oldName: "Sharvan"});
    }

    render() {
        return (
            <div>
                
                <button
                type='button'
                onClick={this.changeName}
                >Change Name</button>
                <h3>This is {this.state.oldName}</h3>

            </div>
        );
    }
}

export default ClassUpdateDerived;