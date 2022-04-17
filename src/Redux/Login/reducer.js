import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERROR } from "./action";

const initState = {
  loading: false,
  isAuthenticated: false,
  token: "",
  error: false,
};

const loginReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return { ...store, loading: true };

    case LOGIN_SUCCESS:
      return {
        ...store,
        loading: false,
        isAuthenticated: true,
        token: payload,
      };
    case LOGIN_ERROR:
      return {
        ...store,
        loading: false,
        error: true,
        isAuthenticated: false,
      };
    default:
      return store;
  }
};

export { loginReducer };
