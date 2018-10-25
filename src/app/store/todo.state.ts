import ToDo from "../todo.model";

export interface ToDoState {
    Loading: boolean;
    Loaded: boolean;
    ToDoList: ToDo[]
}

export const initializedState = (): ToDoState => {
    return({
        ToDoList: [],
        Loading: false,
        Loaded: true
    })
}