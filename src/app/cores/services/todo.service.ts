import { ITodo } from '../../features/todos/interfaces/i-todo';
import { MOCK_TODOS } from '../mocks/todo.mock';

export class TodoService {
  private todos: ITodo[] = MOCK_TODOS;
  private trashTodos: ITodo[] = [];

  getTodos(): ITodo[] {
    return this.todos;
  }

  getTrashTodos(): ITodo[] {
    return this.trashTodos;
  }

  addTodo(todo: ITodo): void {
    let payload: ITodo = { ...todo };
    payload.id = this.todos.length + 1;
    this.todos.push(payload);
  }

  removeTodo(id: number): void {
    let payload: ITodo[] = this.todos.filter((value: ITodo) => value.id !== id);
    this.todos = payload;
  }

  searchTodo(query: string) {
    let todosCopy: ITodo[] = [...this.todos];
    let results = todosCopy.filter((value: ITodo) =>
      value.task.toLowerCase().includes(query.toLowerCase())
    );

    if (results.length > 0) {
      this.todos = results;
    }

    if (query === '') {
      this.todos = MOCK_TODOS;
    }
  }

  moveToTrash(todo: ITodo) {
    this.trashTodos.push(todo);
  }

  restore(id: number) {
    let todoRestore: ITodo | undefined = this.trashTodos.find(
      (value: ITodo) => value.id === id
    );
    if (todoRestore) {
      this.todos.push(todoRestore);

      let payload: ITodo[] = this.trashTodos.filter(
        (value: ITodo) => value.id !== id
      );
      this.trashTodos = payload;
    }
  }

  getTotalTrash(): number {
    return this.trashTodos.length;
  }

  getTotalTodos(): number {
    return this.todos.length;
  }
}
