const SignUpPage = () => {
  return (
      <div class="container">
      <div class="row">

          <div class="col12" align="center">
            <div class="signup-container">
              <h1>Sign Up</h1>

              
              
              
                {/*NEED TO MAKE THIS MATCH THE MODEL FOR WHAT WE ACTUALLY NEED*/}
                {/*ALSO NEED TO MAKE THE ENDPOINTS PROPER LINK UP -- SUBMIT CREATES A NEW USER ON THE BACKEND AND PUSHES TO DB*/}
                {/*NEED TO LINK UP THE PROPER VALUES (INPUT VALUES = ATTRIBUTES) THAT CORRESPOND WITH A USER ON THE BACKEND*/}
                {/*VALUES NAMES NEED TO PROPERLY CORRESPOND WITH ATTRIBUTES ON BACKEND FOR USER*/}


                <form noValidate class="signup-form">            
                    <div class="form-group">
                        <label>First Name:</label>
                        <input type="text" name="firstName" class="form-control"/>
                    </div>

                    <div class="form-group">
                        <label>Last Name:</label>
                        <input type="text" name="lastName" class="form-control"/>
                    </div>

                    <div class="form-group">
                        <label>Email:</label>
                        <input type="text" name="email" class="form-control"/>
                    </div>

                    <div class="form-group">
                        <label>Username:</label>
                        <input type="text" name="username"  class="form-control"/>
                    </div>

                    <div class="form-group">
                        <label>Password:</label>
                        <input type="password" name="password" class="form-control"/>
                    </div>


                    {/*MAYBE IN HERE NEED TO INCLUDE RADIO BUTTONS FOR WHAT TYPE OF USER??*/}
                    
                    <div class="form-group">
                        <label>What type of user are you?</label>
                        <br/>                        
                        <input type="radio" class="radio" name="usertype" value="server"/>
                        <label>Server</label>
                        <input type="radio" class="radio" name="usertype" value="manager"/>                      
                        <label>Manager</label>
                        <input type="radio" class="radio" name="usertype" value="owner"/>
                        <label>Owner</label>
                    </div>                                
                    <br/>

                    <div>
                        <input class="btn btn-primary" type="submit" value="Sign up" />
                    </div>

                </form>
              </div>
          </div>
      </div>
  </div>  
  );
};

export default SignUpPage;
