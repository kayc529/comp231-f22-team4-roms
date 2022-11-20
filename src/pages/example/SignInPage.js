const SignInPage= () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col12" align="center">
          <div class="signin-form">    
          <h1>Sign In</h1>
            <form>
                <div class="form-group">
                    <label>Username:</label>                    
                    <input type="text" name="username" class="form-control" />
                </div>
                <div class="form-group">
                    <label>Password:</label>                    
                    <input type="password" name="password" class="form-control"/>
                </div>
                <br/>
                <div class="form-group">
                    <input class="btn btn-primary" type="submit" value="Sign In"/>                    
                </div>
                <br/>
                <div class="form-group">
                  <h3>Don't have an account?</h3>
                    <a href="/signup">
                        <i class="fas fa-user-plus btn-primary"></i>    
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
