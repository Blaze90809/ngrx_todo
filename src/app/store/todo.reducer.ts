
import ActionWithPayload from "../ActionWithPayload";
import ToDo from "../todo.model";
import { ToDoState, initializedState } from './todo.state';
import * as ToDoActions from "./todo.action";
import {Action} from "@ngrx/store";

const initialState = initializedState();

export function ToDoReducer(state: ToDoState = initialState, action: Action) {
    console.log("Reducer");
    switch (action.type) {
        case ToDoActions.GET_TODO:
        console.log("get todo");
            return { ...state, Loaded: false, Loading: true };

        case ToDoActions.CREATE_TODO:
        console.log("create todo");
            return ({
                ...state,
                ToDoList: state.ToDoList.concat((action as ActionWithPayload<ToDo[]>).payload),
            Loaded: false, Loading: true
            });
            default:
            return state;
    }
}