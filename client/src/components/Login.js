import React, {useState} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from 'react-router-dom';

const initialCredentials = {
  username: '',
  password: '',
}
const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const history = useHistory()
  const [credentials, setCredentials] = useState(initialCredentials)

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name] : e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault()
    axiosWithAuth()
    .post('/api/login', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      history.push('/api/colors')
    })
    .catch(err => {
      console.log('POST ERROR: ' + err)
    })
    setCredentials(credentials)
  }
  return (
    <>
      <h1 style={{marginLeft:"100px"}}>BubbleLand Welcomes You!</h1>
      <br/>
      <br/>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:    
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange} 
          />
        </label>
        <label htmlFor="password">Password: 
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange} 
          />
        </label>
        <button>Sign In</button>
      </form>
    </>
  );
};

export default Login;