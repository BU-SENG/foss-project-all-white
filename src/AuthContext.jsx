import React, { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from './supabaseClient'; // --- IMPORT SUPABASE CLIENT ---

const AuthContext = createContext();

// Helper to create the corresponding entry in the 'profiles' table 
// (Needed because the 'listings' table relies on the 'profiles' table)
const createProfile = async (id, name, email) => {
  const { error } = await supabase
    .from('profiles')
    .insert([
      { id: id, full_name: name, email: email },
    ]);
  if (error) throw error;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 1. Session Listener: Checks for session on load and listens for changes
  useEffect(() => {
    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for events (like login, logout, token refresh)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );
    // Cleanup the listener when the component unmounts
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  // 2. Real Login API Call
  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error; // Throw error to be caught by the screen component
    return data;
  };

  // 3. Real Signup API Call (Includes creating the profile entry)
  const signup = async (name, email, password) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    
    // CRITICAL: After Auth user is created, create the public profile entry
    await createProfile(data.user.id, name, email); 

    return data;
  };

  // 4. Real Logout API Call
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