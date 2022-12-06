import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from '../features/authentication/auth-service';

function SignOut()
{
    useEffect(() => {
        document.title = "SignOut";
        AuthService.logout();
        window.location.reload();
    }, []);

    return(
        <Navigate to= "/signin" />
    );
}

export default SignOut;