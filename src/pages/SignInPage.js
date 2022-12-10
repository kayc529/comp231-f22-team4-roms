import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../features/authentication/auth-service';
import { toast } from 'react-toastify';

const SignInPage = () => {
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        document.title = "Sign In";
    }, []);

    function onChangeUsername(event)
    {
        setUsername(event.target.value);
    }

    function onChangePassword(event)
    {
        setPassword(event.target.value);
    }

    function handleSignIn(event)
    {
        event.preventDefault();
        
        const staff = {
            username: username,
            password: password,
        }

        AuthService.login(staff.username, staff.password)
        .then((data) => {
            if(data.success)
            {
                navigate("/ManageOrder");
                window.location.reload();
                toast("Login successfully!")
            }
            else
            {
                toast.error(data.message);
                clearForm(null);
            }

        }, error => {          
            toast.error("Server Error!");
        });
    }

    function clearForm(event)
    {
        setUsername("");
        setPassword("");
    }
  
  return (
    <div className="container">
      <div className="row">
        <div className="col12" align="center">
          <div className="signin-form">    
            <h1>Sign In</h1>
            
            <form onSubmit= { handleSignIn } id="signinForm" noValidate>
                <div className="form-group">
                    <label>Username:</label>                    
                    <input type="text" className="form-control" id="username" name="username"  required
                            value= {username}
                            onChange = { onChangeUsername }
                            placeholder="Enter your username"/>
                </div>
                <div className="form-group">
                    <label>Password:</label>                    
                    <input type="password" className="form-control" id="password" name="password"  required
                            value= {password}
                            onChange = { onChangePassword }
                            placeholder="Enter your password"/>
                </div>
                <br/>
                <div className="form-group">
                    <button id="signInButton" type="submit" className="btn btn-primary btn-lg">Sign In</button>
                </div>
                <br/>
                <div className="form-group">
                  <h3>Don't have an account?</h3>
                    <a href="/signup">
                        <i className="fas fa-user-plus btn-primary"></i>    
                        Sign-Up
                    </a>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
