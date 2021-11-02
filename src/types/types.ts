import React, { FC, LazyExoticComponent } from "react";
import { RouteComponentProps } from "react-router-dom";
import { ActionType } from "typesafe-actions";
import {
  requestCurrentUserActionSuccess,
  requestLoginAction,
  requestLoginSuccessAction,
} from "../state-mgmt/store";

export interface ISystemState {
  admin: Boolean;
  isLoggedIn: boolean;
  status: string;
  token: string;
  showModal: TShowModal;
}

export interface IUserInput {
  readonly username: string;
  readonly password: string;
}

export interface ICurrentUser {
  name: string;
}

export interface IModalState {
  show: Boolean;
}

export interface IPrivateRoute {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>
    | LazyExoticComponent<React.ComponentType<any>>;
  path: string;
}

export interface CustomRoute {
  path: string;
  name: string;
  component: FC<RouteComponentProps>;
}

export type TShowModal = Boolean;

export type SliceState = ISystemState & ICurrentUser;

export type SourceActions =
  | typeof requestLoginAction
  | typeof requestLoginSuccessAction
  | typeof requestCurrentUserActionSuccess;

export type Action = ActionType<SourceActions>;
