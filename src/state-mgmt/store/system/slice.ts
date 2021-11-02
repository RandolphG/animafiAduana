import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import { SliceState } from "../../../types/types";

const initState: SliceState = {
  admin: false,
  isLoggedIn: true,
  status: "",
  token: "",
  name: "",
  showModal: false,
};

export const systemSlice = createSlice({
  name: "system",
  initialState: initState as SliceState,
  reducers,
});

export const {
  requestLoginAction,
  requestLoginSuccessAction,
  requestCurrentUserActionSuccess,
  requestLoginActionFailure,
  requestShowModalSuccess,
} = systemSlice.actions;

export default systemSlice.reducer;
