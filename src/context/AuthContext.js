import React, { createContext, useReducer, useContext } from 'react';
import authReducer from './authReducer';

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: true,
};

const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
