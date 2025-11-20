import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // 1. Initialize state by checking Local Storage first
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('campusUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // 2. Update Local Storage whenever user state changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('campusUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('campusUser');
    }
  }, [user]);

  const login = (email) => {
    const newUser = {
      name: "Student User",
      email: email,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
    };
    setUser(newUser);
  };

  const signup = (name, email) => {
    const newUser = {
      name: name,
      email: email,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
    };
    setUser(newUser);
  };

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