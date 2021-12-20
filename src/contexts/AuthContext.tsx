import React, { useState, useContext, createContext } from "react";

interface AuthContextType {
  user: any;
}

const AuthContext = createContext<AuthContextType>(null!);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({
    isAuthenticated: false,
    token: null,
  });

  const value = { user, setUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
