import { FormsModule } from '@angular/forms';
import { ToDoComponent } from './todo-component/to-do.component';
import { TodoRoutingModule } from './todo-routing.module';
import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        TodoRoutingModule,
        FormsModule
    ],
    declarations: [ToDoComponent]
})
export class ToDoModule {}