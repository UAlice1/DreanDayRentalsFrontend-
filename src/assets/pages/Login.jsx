import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const proceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      ///implementation
      //console.log('proceed');
      fetch(`http://localhost:8000/user/${username}`)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          //console.log(resp)
          if (Object.keys(resp).length === 0) {
            toast.error('Please enter a valid username');
          } else {
            if (resp.password === password) {
              toast.success('Login success');
              history.push('/');
            } else {
              toast.error('Please enter valid credentials');
            }
          }
        })
        .catch((error) => {
          toast.error('Login Fail due to: ' + error.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (username === '' || username === null) {
      result = false;
      toast.warning('Please enter a username');
    }
    if (password === '' || password === null) {
      result = false;
      toast.warning('Please enter a password');
    }
    return result;
  };

  return (
    <div className='row'>
      <div className='offset-lg-3 col-lg-6'>
        <form onSubmit={proceedLogin} className='container'>
          <div className='card'>
            <div className='card-header'>
              <h1>User Login</h1>
            </div>
            <div className='card-body'>
              <div className='form-group'>
                <label>User Name<span className='errmsg'>*</span></label>
                <input
                  type='text'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className='form-control'
                />
              </div>
              <div className='form-group'>
                <label>Password<span className='errmsg'>*</span></label>
                <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='form-control'
                />
              </div>
            </div>
            <div className='card-footer'>
              <button type='submit' className='btn btn-primary'>
                Login
              </button>
              <Link className='btn btn-success' to={'/register'}>
                New User
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
