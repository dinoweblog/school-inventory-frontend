import {
  GET_TEACHERS,
  GET_TEACHERS_ERROR,
  GET_TEACHERS_LOADING,
} from "./action";

const initState = {
  loading: false,
  error: false,
  teachers: [],
};

export const teachersReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case GET_TEACHERS_LOADING:
      return { ...store, loading: true };

    case GET_TEACHERS:
      return {
        ...store,
        loading: false,
        teachers: [...payload],
        error: false,
      };
    case GET_TEACHERS_ERROR:
      return {
        ...store,
        loading: false,
        error: true,
      };
    default:
      return store;
  }
};
