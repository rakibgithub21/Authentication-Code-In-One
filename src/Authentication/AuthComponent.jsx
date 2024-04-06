import { createContext } from "react";

export const AuthProvider = createContext(null)
// eslint-disable-next-line react/prop-types
const AuthComponent = ({ children }) => {
    

    const authValue = {}

    
    return (
        <AuthProvider.Provider value={authValue}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthComponent;