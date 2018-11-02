import { ToDoComponent } from './todo-component/to-do.component';
import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ToDoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TodoRoutingModule { }
  