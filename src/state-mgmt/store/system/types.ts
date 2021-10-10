import { TShowModal } from "./selectors";

export interface ISystemState {
  admin: Boolean;
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
