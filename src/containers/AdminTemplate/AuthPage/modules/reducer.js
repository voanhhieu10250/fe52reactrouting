import {
  AUTH_PAGE_REQUEST,
  AUTH_PAGE_SUCCESS,
  AUTH_PAGE_FAILED,
} from "./constant";

let innitialState = {
  loading: false,
  data: null,
  err: null,
};

const authReducer = (state = innitialState, action) => {
  switch (action.type) {
    case AUTH_PAGE_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case AUTH_PAGE_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case AUTH_PAGE_FAILED:
      state.loading = false;
      state.date = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default authReducer;
