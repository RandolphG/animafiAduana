import { createSelector } from "reselect";
import { ISystemState } from "./types";

export type TShowModal = Boolean;

// const selectSystemState = (state: ISystemState) => state;
const selectSystemState = (state: any) => state;

/* return modal state */
export const selectShowModal = createSelector(
  selectSystemState,
  (state: any) => {
    console.log(`selector state`, state);
    return state.system.showModal;
  }
);

/*
export const selectShowModal = createSelector(
  selectSystemState,
  (state): TShowModal => state.showModal
);
*/
