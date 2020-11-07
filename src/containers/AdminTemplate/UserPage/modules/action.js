import {
  ADD_USER_FAILED,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
} from "./constant";
import Axios from "axios";

export const actAddUserApi = (user) => {
  let accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
  return (dispatch) => {
    dispatch(actUserRequest());
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      method: "POST",
      data: user,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        dispatch(actUserSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actUserFailed(err));
      });
  };
};

const actUserRequest = () => {
  return {
    type: ADD_USER_REQUEST,
  };
};

const actUserSuccess = (data) => {
  return {
    type: ADD_USER_SUCCESS,
    payload: data,
  };
};

const actUserFailed = (err) => {
  return {
    type: ADD_USER_FAILED,
    payload: err,
  };
};
