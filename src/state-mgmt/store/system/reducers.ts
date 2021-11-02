import { PayloadAction } from "@reduxjs/toolkit";
import {
  ICurrentUser,
  IModalState,
  ISystemState,
  IUserInput,
} from "../../../types/types";

export const reducers = {
  requestLoginAction: (state: any, action: PayloadAction<IUserInput>) => {},
  requestLoginSuccessAction: (
    state: any,
    action: PayloadAction<ISystemState>
  ) => {
    const { admin, status, token } = action.payload;
    state.admin = admin;
    state.status = status;
    state.token = token;
  },
  requestCurrentUserActionSuccess: (
    state: any,
    action: PayloadAction<ICurrentUser>
  ) => {
    const name = action.payload.name;
    state.name = name;
  },
  requestLoginActionFailure: (state: any, action: PayloadAction<Error>) => {},
  requestShowModalSuccess: (state: any, action: PayloadAction<IModalState>) => {
    // state.showModal = action.payload.show;
    console.log(
      "requestShowModalSuccess : action payload",
      action.payload.show
    );
    return { ...state, showModal: action.payload.show };
  },
};
