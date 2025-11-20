import React, { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from './supabaseClient'; 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // 1. Initialize state by checking Local Storage first (for persistence)
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('campusUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [loading, setLoading] = useState(true);

  // 2. Session Listener: Checks for session on load and listens for changes
  useEffect(() => {
    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for events (login, logout, token refresh)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );
    
    // Also update Local Storage whenever user state changes (for persistence across browser tabs)
    if (user) {
      localStorage.setItem('campusUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('campusUser');
    }

    // Cleanup the listener when the component unmounts
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [user]); // Run when 'user' changes

  // 3. Real Login API Call
  // (We don't use the password argument here, but the LoginScreen still sends it)
  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error; 
    return data;
  };

  // 4. Real Signup API Call (Uses metadata to pass name for Postgres Trigger)
  const signup = async (name, email, password) => {
    const { data, error } = await supabase.auth.signUp({ 
      email, 
      password, 
      options: {
          // CRITICAL: We pass the full_name here. The Postgres Trigger uses this metadata.
          data: { full_name: name } 
      }
    }); 
    if (error) throw error;
    
    // The profile creation is handled automatically on the server side (Postgres Trigger)

    return data;
  };

  // 5. Real Logout API Call
  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error("Logout Error:", error.message);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);