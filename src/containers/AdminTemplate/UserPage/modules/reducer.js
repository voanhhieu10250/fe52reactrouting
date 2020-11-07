import {
  ADD_USER_FAILED,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
} from "./constant";

let innitialState = {
  loading: false,
  data: null,
  err: null,
};

const addUserReducer = (state = innitialState, action) => {
  switch (action.type) {
    case ADD_USER_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case ADD_USER_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case ADD_USER_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
export default addUserReducer;
