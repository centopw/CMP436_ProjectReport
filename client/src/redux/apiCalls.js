import { loginStart, loginSuccess, loginFailure, registerStart, registerSuccess, registerFailure } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  console.log("User: ", user); //Console log the response

  try {
    const res = await publicRequest.post("/auth/login", user);
    console.log("Response:", res.data); //Console log the response
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log("Error:", err); //Console log the error
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => { 
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
      dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure(console.log(err)));
  }
};