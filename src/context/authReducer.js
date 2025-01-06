const authReducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...state, user: action.payload, isAuthenticated: true, loading: false };
      case 'LOGOUT':
        return { ...state, user: null, isAuthenticated: false, loading: false };
      case 'REGISTER_SUCCESS':
        return { ...state, user: action.payload, isAuthenticated: true, loading: false };
      default:
        return state;
    }
  };
  
  export default authReducer;
  