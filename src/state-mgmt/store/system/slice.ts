import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInput, ISystemState, ICurrentUser, IModalState } from "./types";

type SliceState = ISystemState & ICurrentUser;

const initState: SliceState = {
  admin: false,
  status: "",
  token: "",
  name: "",
  showModal: false,
};

export const systemSlice = createSlice({
  name: "system",
  initialState: initState as SliceState,
  reducers: {
    requestLoginAction: (state, action: PayloadAction<IUserInput>) => {},
    requestLoginSuccessAction: (state, action: PayloadAction<ISystemState>) => {
      const { admin, status, token } = action.payload;
      state.admin = admin;
      state.status = status;
      state.token = token;
    },
    requestCurrentUserActionSuccess: (
      state,
      action: PayloadAction<ICurrentUser>
    ) => {
      const name = action.payload.name;
      state.name = name;
    },
    requestLoginActionFailure: (state, action: PayloadAction<Error>) => {},
    requestShowModalSuccess: (state, action: PayloadAction<IModalState>) => {
      // state.showModal = action.payload.show;
      console.log(
        "requestShowModalSuccess : action payload",
        action.payload.show
      );
      return { ...state, showModal: action.payload.show };
    },
  },
});

export const {
  requestLoginAction,
  requestLoginSuccessAction,
  requestCurrentUserActionSuccess,
  requestLoginActionFailure,
  requestShowModalSuccess,
} = systemSlice.actions;

export default systemSlice.reducer;
