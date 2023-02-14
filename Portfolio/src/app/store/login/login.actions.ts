import { createAction, props } from "@ngrx/store";
import { User } from "src/app/interfaces/user.interface";

export const LOGIN = createAction(
    '[Login] Init Session',
    props<{ isLogged:boolean, user: User }>()
)
export const LOGOUT = createAction('[Login] Close Session')
export const NO_USER = createAction('[Login] Usuario no existe')
export const IS_ADMIN = createAction('[Login] Usuario no existe')
export const IS_LOGGED_USER = createAction('[Login] Revisar si ya inicio sesion el usuario')
