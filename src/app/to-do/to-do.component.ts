
import { ToDoState } from './../store/todo.state';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select, Action } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CreateToDo, CREATE_TODO, GET_TODO } from '../store/todo.action';
import { ToDoReducer } from '../store/todo.reducer';
import ToDo from '../todo.model';
import ActionWithPayload from "../ActionWithPayload";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  constructor(private store: Store<ToDoState>) { }

  ngOnInit() {
    this.ToDoState$ = this.store.pipe(select('todos'));

    let createToDoAction: ActionWithPayload<ToDo> = {
      type: CREATE_TODO,
      payload: {Title: 'First Wishlist', IsCompleted: false}
    }

    let getToDoAction: Action = {
      type: GET_TODO
    }

    this.ToDoSubscription = this.ToDoState$.pipe(map(x => this.ToDoList = x.ToDoList)).subscribe();
    this.store.dispatch(getToDoAction);
  }
  ToDoState$: Observable<ToDoState>;
  ToDoSubscription: Subscription;
  Title: string;
  Completed: boolean = false;
  ToDoList: ToDo[];

  CreateToDo() {
    console.log(this.Title);
    let todoAction: ActionWithPayload<ToDo> = {
      type: CREATE_TODO,
      payload: {Title: this.Title, IsCompleted: this.Completed}
    }
    this.store.dispatch(todoAction);
  }

  ngOnDestroy() {
    this.ToDoSubscription.unsubscribe();
  }

}
