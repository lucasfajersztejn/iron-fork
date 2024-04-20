import { createContext, useEffect, useState } from "react";
import { getProfile, login } from "../services/api.service";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  async function fetchProfile() {
    const response = await getProfile();
    setUser(response.data);
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  async function doLogin(data) {
    await login(data);
    fetchProfile();
  }

  const value = {
    user,
    doLogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
