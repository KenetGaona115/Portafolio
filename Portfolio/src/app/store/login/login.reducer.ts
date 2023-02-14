import { createReducer, on } from "@ngrx/store";
import { LOGIN, LOGOUT, NO_USER } from "./login.actions";
import produce from "immer";
import { User } from "src/app/interfaces/user.interface";

export interface LoginState {
    isLoged: boolean;
    user: User | null;
}

const initialState: LoginState = {
    isLoged: false,
    user: {}
}

export const LoginReducer = createReducer(
    initialState,
    on(LOGIN, (state: LoginState, payload) => {
        const newState = produce(state, (draftState) => { draftState.isLoged = payload.isLogged, draftState.user = payload.user });
        return newState;
    }),
    on(LOGOUT, (state) => {
        return { ...state, user: null, isLogged: false };
    }),
    on(NO_USER, (state) => {
        const newState = produce(state, (draftState) => { draftState.isLoged = true });
        return newState;
    }),

)