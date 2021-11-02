import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import { ISystemState } from "../../../types/";

const initState: ISystemState = {
  admin: false,
  isLoggedIn: true,
  status: "",
  token: "",
  name: "",
  showModal: false,
  showSignInModal: false,
};

export const systemSlice = createSlice({
  name: "system",
  initialState: initState as ISystemState,
  reducers,
});

export const {
  requestLoginAction,
  requestLoginSuccessAction,
  requestCurrentUserActionSuccess,
  requestLoginActionFailure,
  requestShowModalSuccess,
  requestShowSignInModalSuccess,
} = systemSlice.actions;

export default systemSlice.reducer;
