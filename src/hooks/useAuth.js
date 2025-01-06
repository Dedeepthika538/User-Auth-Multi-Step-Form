import { useAuth } from '../context/AuthContext';

const useAuthActions = () => {
  const { dispatch } = useAuth();

  const login = (userData) => {
    dispatch({ type: 'LOGIN_SUCCESS', payload: userData });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const register = (userData) => {
    dispatch({ type: 'REGISTER_SUCCESS', payload: userData });
  };

  return { login, logout, register };
};

export default useAuthActions;
