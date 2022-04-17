export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const loginLoading = () => ({
  type: LOGIN_LOADING,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginError = () => ({
  type: LOGIN_ERROR,
});

export const login = (payload) => (dispatch) => {};
