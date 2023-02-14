import { createContext, useCallback, useMemo, useState } from "react";

const MY_AUTH_APP = 'MY_AUTH_APP_1';

export const Context = createContext({})

export const ContextProvider = ({children}:any) => {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem(MY_AUTH_APP) ?? 'false')



    const login = useCallback(function (){
        window.localStorage.setItem(MY_AUTH_APP, 'true');
        setIsAuthenticated('true');
    }, []);



    const logout = useCallback(function (){
        window.localStorage.removeItem(MY_AUTH_APP);
        setIsAuthenticated('false');
    }, []);




    const value = useMemo(() => ({
        login,
        logout,
        isAuthenticated,
    }), [login, logout, isAuthenticated]) 

    return <Context.Provider value={value}>{children}</Context.Provider>
}


