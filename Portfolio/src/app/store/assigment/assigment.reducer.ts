import { createReducer, on } from "@ngrx/store";
import { CREATE_ASSIGNMENT } from "./assigment.actions";
import produce from "immer"
export interface AssigmentState {
    value: boolean;
}

const initialState: AssigmentState = {
    value: false
}

export const AssigmentReducer = createReducer(
    initialState,
    on(CREATE_ASSIGNMENT, (state: AssigmentState) => {
        const newState = produce(state, (draft) => { draft.value = true; })
        return newState
    })
)