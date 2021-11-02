import { createSelector } from "reselect";
import { SliceState } from "../../../types/types";

const selectSystemState = (state: SliceState) => {
  console.log(`selector state`, state);
  return state;
};

/* modal state */
export const selectShowModal = createSelector(selectSystemState, (state) => {
  return state.showModal;
});

/* loggedIn state */
export const getLoggedInState = createSelector(
  selectSystemState,
  (state) => state.isLoggedIn
);
