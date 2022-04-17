export const GET_TEACHERS = "GET_TEACHERS";
export const GET_TEACHERS_LOADING = "GET_TEACHERS_LOADING";
export const GET_TEACHERS_ERROR = "GET_TEACHERS_ERROR";

const getTeachers = (payload) => ({
  type: GET_TEACHERS,
  payload,
});

export const getTeachersLoading = () => ({
  type: GET_TEACHERS_LOADING,
});

export const getTeachersError = () => ({
  type: GET_TEACHERS_ERROR,
});
export const getDataAll = () => (dispatch) => {
  dispatch(getTeachersLoading());
  fetch(`https://school-inventory-server.herokuapp.com/teachers/`)
    .then((res) => res.json())
    .then((res) => {
      dispatch(getTeachers(res));
    })
    .catch(() => dispatch(getTeachersError()));
};
