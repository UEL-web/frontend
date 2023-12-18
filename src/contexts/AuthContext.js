import {createContext} from "react";

const AuthContext = createContext({
    user: {
        email: '',
        firstName: '',
        lastName: '',
        accessToken: '',
        refreshToken: ''
    },
    login: () => {},
    logout: () => {},
    setUser: () => {}
});

export default AuthContext;