import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})

export class TodoComponent {
  todos: { id: number, title: string, completed: boolean }[] = [];
  
  newTodo: string = '';
  
  nextId: number = 1;

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({
        id: this.nextId++,
        title: this.newTodo.trim(),
        completed: false
      });
      this.newTodo = '';
    }
  }

  editTodo(todo: any) {
    const updatedTitle = prompt('Edit Todo', todo.title);
    if (updatedTitle !== null && updatedTitle.trim()) {
      todo.title = updatedTitle.trim();
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggleCompleted(todo: any) {
    todo.completed = !todo.completed;
  }

  getTotalTodos(): number {
    return this.todos.length;
  }

  // Get total number of completed todos
  getTotalCompletedTodos(): number {
    return this.todos.filter(todo => todo.completed).length;
  }
}