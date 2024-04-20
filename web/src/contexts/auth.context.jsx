import { createContext } from "react";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const value = {
    name: "Julio",
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
