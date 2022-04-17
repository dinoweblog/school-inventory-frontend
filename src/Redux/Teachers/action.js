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
  fetch(`https://reqres.in/api/users?page=2`)
    .then((res) => res.json())
    .then((res) => {
      dispatch(getTeachers(res.data));
    })
    .catch(() => dispatch(getTeachersError()));
};
