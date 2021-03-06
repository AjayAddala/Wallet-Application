const initialLoginState = {
    username: "",
    role: "",
    loggedIn: false,
    errMsg: "",
  };
  
  const LoginReducer = (state = initialLoginState, action) => {
    switch (action.type) {
      case "LOGIN":
        return { ...state, ...action.payload };
      case "ERR_RES":
        return { ...state, errMsg: action.payload };
      case "LOGOUT":
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };
  
  export default LoginReducer;

  export const loginSelector = state => state?.login?.loggedIn;
  export const roleSelector = state => state?.login?.role;