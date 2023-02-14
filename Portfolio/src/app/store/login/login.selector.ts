import { createSelector } from "@ngrx/store";
import { AppState } from "../app.reducer";

export const loginStateSelector = (state: AppState) => { return state.loginState }
export const LoginIsLoggedIn = createSelector(loginStateSelector, (loginState)=> loginState.isLoged)