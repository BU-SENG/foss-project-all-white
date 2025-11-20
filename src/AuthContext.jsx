import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // By default, no user is logged in (null)
  const [user, setUser] = useState(null);

  // Simulate Login
  const login = (email, password) => {
    // In a real app, you would send this to a server.
    // Here, we just simulate a successful login.
    setUser({
      name: "Student User",
      email: email,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
    });
  };

  // Simulate Signup
  const signup = (name, email, password) => {
    setUser({
      name: name,
      email: email,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
    });
  };

  // Handle Logout
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);