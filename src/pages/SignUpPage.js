import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../features/authentication/auth-service';

const SignUpPage = () => {
 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [role, setRole] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); 

    useEffect(()=>{
        document.title = "Register";
    }, []);

    function onChangeUsername(event)
    {
        setUsername(event.target.value);
    }

    function onChangePassword(event)
    {
        setPassword(event.target.value);
    }

    function onChangeFirstName(event)
    {
        setFirstName(event.target.value);
    }

    function onChangeLastName(event)
    {
        setLastName(event.target.value);
    }

    function onChangeRole(event)
    {
        setRole(event.target.value);
    }
    
    function handleMessage()
    {
        if(message.length > 0)
        {
            return(
            <div id="messageArea" className="alert alert-danger">
                {message}
              </div>
            );
        }
    }

    function clearForm(event)
    {
        setUsername("");
        setPassword("");
        setFirstName("");
        setLastName("");
        setRole("")
    }

    function handleSignUp(event)
    {
        event.preventDefault();

        const UserData = {
            username: username,
            password: password,
            firstname: firstname,
            lastname: lastname,
            role: role
        }

        AuthService.register(UserData.username, UserData.password, UserData.firstname, UserData.lastname, UserData.role)
        .then((data) => {

            if(data.success)
            {
                navigate('/staffs');
            }
            else
            {
                setMessage(data.message);
                clearForm(null);
            }
            
        }, error => {
            setMessage("Server Error!");
        });
    }


  return (
      <div className="container">
      <div className="row">

          <div className="col12" align="center">
            <div className="signup-container">
                <h1>Sign Up</h1>
                
                {handleMessage()}
                      
                {/*NEED TO MAKE THIS MATCH THE MODEL FOR WHAT WE ACTUALLY NEED*/}
                {/*ALSO NEED TO MAKE THE ENDPOINTS PROPER LINK UP -- SUBMIT CREATES A NEW USER ON THE BACKEND AND PUSHES TO DB*/}
                {/*NEED TO LINK UP THE PROPER VALUES (INPUT VALUES = ATTRIBUTES) THAT CORRESPOND WITH A USER ON THE BACKEND*/}
                {/*VALUES NAMES NEED TO PROPERLY CORRESPOND WITH ATTRIBUTES ON BACKEND FOR USER*/}


                <form noValidate className="signup-form"  onSubmit = { handleSignUp }>            
                    <div className="form-group">
                        <label>First Name:</label>
                        <input className="form-control" type="text" name="firstname" id="firstname" 
                            value = { firstname}
                            onChange = { onChangeFirstName }
                            placeholder="First Name" required/>
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input className="form-control" type="text" name="lastname" id="lastname" 
                            value = { lastname}
                            onChange = { onChangeLastName }
                            placeholder="Last Name" required/>
                    </div>
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text" className="form-control" id="username" name="username"  required
                            value= {username}
                            onChange = { onChangeUsername }
                            placeholder="Username"/>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" className="form-control" id="password" name="password"  required
                            value= {password}
                            onChange = { onChangePassword } 
                            placeholder="Password"/>
                    </div>


                    {/*MAYBE IN HERE NEED TO INCLUDE RADIO BUTTONS FOR WHAT TYPE OF USER??*/}
                    
                    <div className="form-group" onChange={onChangeRole}>
                        <label>What type of user are you?</label>
                        <br/>
                        <input type="radio" className="radio" name="role" value="SERVER"/>
                        <label>Server</label>
                        <input type="radio" className="radio" name="role" value="CHEF"/>
                        <label>Chef</label>
                        <input type="radio" className="radio" name="role" value="CS"/>
                        <label>CS</label>
                        <input type="radio" className="radio" name="role" value="TECH_SUPPORT"/> <label>Tech Support</label>    
                        <input type="radio" className="radio" name="role" value="MANAGER" />      
                        <label>Manager</label>
                        <input type="radio" className="radio" name="role" value="OWNER"/>
                        <label>Owner</label>
                    </div>                                
                    <br/>

                    <div>
                        <input className="btn btn-primary" type="submit" value="Sign up" />
                    </div>

                </form>
              </div>
          </div>
      </div>
  </div>  
  );
};

export default SignUpPage;
