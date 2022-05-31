import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, toggleAuth] = useState(false);

  const toggle = () => {
    toggleAuth(!isAuth);
  };

  return (
    <AuthContext.Provider value={{ isAuth, toggle }}>
      {children}
    </AuthContext.Provider>
  );
};
