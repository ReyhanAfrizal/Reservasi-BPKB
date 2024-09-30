import { Component,Input } from '@angular/core';
import { ITodo } from '../../interfaces/i-todo';
import { TodoService } from '../../../../cores/services/todo.service';

let MOCK_DATA = [
  {
    id: 1,
    task: 'Minum Kopi',
    isDone: false,
  },
  {
    id: 2,
    task: 'Meeting',
    isDone: false,
  },
  {
    id: 3,
    task: 'Makan Siang',
    isDone: false,
  },
];

@Component({
  selector: 'app-todos',
  template: `
    <div class="card shadow">
      <div class="card-body bg-light">
        <h5 class="card-title text-center mb-1">{{ title }}</h5>
        <app-todo-form *ngIf="!forTrash"></app-todo-form>
      </div>
      <app-todo-list [forTrash]="forTrash" [todos]="todos"></app-todo-list>
      <div class="card-footer bg-info">
        <app-todo-total [forTrash]="forTrash"></app-todo-total>
      </div>
    </div>
  `,
  styleUrl: './todos.component.css'
})

export class TodosComponent {
  isEdit: boolean = false;
  @Input()
  title: string = 'App Todo';

  @Input()
  forTrash: boolean = false;

  todos: ITodo[] = MOCK_DATA;

  constructor(private todoService: TodoService) {}

  getAll() {
    return this.todoService.getTodos();
  }

  add(todo: ITodo) {
    let payload: ITodo = { ...todo };
    payload.id = this.todos.length + 1;
    this.todos.push(payload);
  }

  remove(todos: ITodo[]) {
    this.todos = todos;
  }

  search(query: string) {
    let todosCopy: ITodo[] = [...this.todos];
  
    // Convert query to lowercase and compare it with lowercase task
    let results = todosCopy.filter((value: ITodo) =>
      value.task.toLowerCase().includes(query.toLowerCase())
    );
  
    if (results.length > 0) {
      this.todos = results;
    }
  
    // Reset to the original todos if the query is empty
    if (query === '') {
      this.todos = MOCK_DATA;
    }
  }
}
