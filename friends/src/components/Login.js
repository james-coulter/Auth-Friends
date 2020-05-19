import React from 'react';
import axios from 'axios';
import './Login.css';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  Login = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', this.state.credentials)
         .then(res => {
             console.log(res)
             localStorage.setItem('token', JSON.stringify(res.data.payload))
             this.props.history.push('/protected')
         })
         .catch(err => {
             console.log(err)
         })
  };

  componentDidMount() {
      localStorage.clear();
  }

  render() {
    return (
      <div className='login'>
          <h3 className='loginName'>Login</h3>
          {/* <h2>Login: lambda, Password: 123</h2> */}
        <form onSubmit={this.Login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;