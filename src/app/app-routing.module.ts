import { ToDoComponent } from './to-do/todo-component/to-do.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//const routes: Routes = [{path: 'app-todo', component: ToDoComponent}];
const routes: Routes = [
  {
    path: 'todo',
    loadChildren: './to-do/todo.module#ToDoModule'
  },
  {
    path: 'list',
    loadChildren: './notes/notes.module#NotesModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
