import http from '../../utils/customFetch';

class AuthService
{
    login(username, password)
    {
        return http.post('/auth/signin', {username, password})
        .then(response => {
            if(response.data.token)
            {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        })
    }
    
    logout()
    {
        localStorage.removeItem("user");
    }
     
    register(username, password, firstname, lastname, role)
    {
        return http.post('/auth/signup', {username, password, firstname, lastname, role})
        .then(response => {
            return response.data;
        });
    }

    getCurrentUser()
    {
        const userString = localStorage.getItem("user");
        if(userString)
        {
            return JSON.parse(userString);
        }
        return false;
    }
}

export default new AuthService();