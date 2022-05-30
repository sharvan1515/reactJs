import React, { Component } from 'react'

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loginName: '',
            loginPassword: '',
            isLogin: false
        };
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit  = (e) => {
        e.preventDefault();
        this.setState({isLogin: true});
      }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" id="loginName" class="form-control" placeholder='E-Mail' onChange={this.handleChange} />
                    <input type="password" id="loginPassword" class="form-control" placeholder='password' onChange={this.handleChange} />
                    <button onSubmit={this.handleSubmit} type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>
                </form>
            </div>
        )
    }
}

export default Login