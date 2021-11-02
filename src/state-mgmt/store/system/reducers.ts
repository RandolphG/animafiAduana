import { PayloadAction } from "@reduxjs/toolkit";
import {
  ICurrentUser,
  IModalState,
  ISignInModalState,
  ISystemState,
  IUserInput,
} from "../../../types/";

export const reducers = {
  requestLoginAction: (
    state: ISystemState,
    action: PayloadAction<IUserInput>
  ) => {},
  requestLoginSuccessAction: (
    state: ISystemState,
    action: PayloadAction<ISystemState>
  ) => {
    const { admin, status, token } = action.payload;

    return {
      ...state,
      admin,
      status,
      token,
    };
  },
  requestCurrentUserActionSuccess: (
    state: ISystemState,
    action: PayloadAction<ICurrentUser>
  ) => {
    return { ...state, name: action.payload.name };
  },
  requestLoginActionFailure: (
    state: ISystemState,
    action: PayloadAction<Error>
  ) => {},
  requestShowModalSuccess: (state: any, action: PayloadAction<IModalState>) => {
    console.log(
      "requestShowModalSuccess : action payload",
      action.payload.show
    );

    return { ...state, showModal: action.payload.show };
  },
  requestShowSignInModalSuccess: (
    state: ISystemState,
    action: PayloadAction<ISignInModalState>
  ) => {
    console.log(
      "requestShowSignInModalSuccess : action payload",
      action.payload.show
    );

    return { ...state, showSignInModal: action.payload.show };
  },
};
