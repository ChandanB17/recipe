// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    // Simulate a 2-second delay
    setTimeout(() => {
      // Perform your login logic here.
      // If successful, set isLoggedIn to true.
      setIsLoggedIn(true);
    }, 3500); // 2000 milliseconds = 2 seconds
  };

  const logout = () => {
    // Simulate a 2-second delay
    setTimeout(() => {
      // Perform your login logic here.
      // If successful, set isLoggedIn to true.
      setIsLoggedIn(false);
    }, 1000); // 2000 milliseconds = 2 seconds
  };


  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
