import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { ShoppingBag } from 'lucide-react';

const LoginScreen = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login(email, password);
      navigate('/'); // Go to Home after login
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <div className="flex items-center gap-2 mb-8">
        <ShoppingBag className="text-primary" size={40} />
        <h1 className="text-3xl font-bold text-white tracking-tight">Campus Marketplace</h1>
      </div>

      <div className="w-full max-w-md bg-surface p-8 rounded-3xl border border-white/5">
        <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
        <p className="text-textMuted mb-6">Enter your details to sign in.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-textMuted text-sm font-bold mb-2">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-background text-white p-4 rounded-xl outline-none border border-transparent focus:border-primary transition"
              placeholder="student@university.edu"
            />
          </div>
          <div>
            <label className="block text-textMuted text-sm font-bold mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-background text-white p-4 rounded-xl outline-none border border-transparent focus:border-primary transition"
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="w-full bg-primary text-black font-bold py-4 rounded-xl hover:bg-green-400 transition mt-4">
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-textMuted">Don't have an account? <button onClick={() => navigate('/signup')} className="text-primary font-bold hover:underline">Sign Up</button></p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;