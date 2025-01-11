import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define the User type with role
interface User {
  id: string;
  name: string;
  email: string;
  profilePic?: string;
  role: 'user' | 'contractor'; // Ensure role is part of the type
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
  register: (email: string, password: string) => void;
}

// Create context with default values
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Simulate API requests
const fakeApiLogin = (email: string, password: string): User | null => {
  if (email === 'test@example.com' && password === 'password123') {
    return { id: '1', email, name: 'John Doe', profilePic: 'profile-pic-url', role: 'user' };
  }
  return null;
};

const fakeApiRegister = (email: string, password: string): User | null => {
  return { id: '2', email, name: 'New User', profilePic: 'new-profile-pic-url', role: 'contractor' };
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage when component mounts
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Login method
  const login = (email: string, password: string) => {
    const loggedInUser = fakeApiLogin(email, password);
    if (loggedInUser) {
      setUser(loggedInUser);
      localStorage.setItem('user', JSON.stringify(loggedInUser));
    } else {
      alert('Invalid email or password');
    }
  };

  // Register method
  const register = (email: string, password: string) => {
    const newUser = fakeApiRegister(email, password);
    if (newUser) {
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
    }
  };

  // Logout method
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Determine if user is authenticated
  const isAuthenticated = user !== null;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated, register }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
