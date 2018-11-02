import { GET_TODO } from './../../store/todo.action';
import { ToDoState } from './../../store/todo.state';
import { Component, OnInit } from '@angular/core';
import { Store, select, Action } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

import ToDo from '../../todo.model';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  constructor(private store: Store<ToDoState>) { }

  ngOnInit() {
    this.ToDoState$ = this.store.pipe(select('todos'));

    let getTodoAction: Action = {
      type: GET_TODO
    }
    this.ToDoSubscription = this.ToDoState$.pipe(map(x => this.ToDoList = x.ToDoList)).subscribe();
    this.store.dispatch(getTodoAction);
  }
  ToDoState$: Observable<ToDoState>;
  ToDoSubscription: Subscription;
  ToDoList: ToDo[];

  ngOnDestroy() {
    this.ToDoSubscription.unsubscribe();
  }

}
