import {getAccessToken, getUserData, removeUserData} from "../utils/auth";
import {useMemo, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function AuthProvider({ children }) {
    const localAccessToken = getAccessToken();
    const [user, setUser] = useState(getUserData());
    const navigate = useNavigate();
    const location = useLocation();

    const login = async (email, password) => {
        const response = await fetch('http://localhost:8080/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });

        const data = await response.json();

        if (data.accessToken) {
            setUser(data);
            navigate(location.state?.from ? location.state.from : '/');
        }
    }

    const logout = () => {
        setUser(null);
        removeUserData();
        navigate('/login');
    }

    const value = useMemo(() => {
        // eslint-disable-next-line no-unused-expressions
        token: localAccessToken,
        user, setUser, login, logout
    })

    return (
        // eslint-disable-next-line react/jsx-no-undef
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;