import { ActionReducerMap } from "@ngrx/store";
import { LoginReducer, LoginState } from "./login/login.reducer";
import { AssigmentReducer } from "./assigment/assigment.reducer";

export interface AppState {
    loginState: LoginState;
    assigmentState: any
}

export const appReducer: ActionReducerMap<AppState> = {
    loginState: LoginReducer,
    assigmentState: AssigmentReducer
}