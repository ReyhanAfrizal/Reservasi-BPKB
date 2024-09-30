import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '../../interfaces/i-todo';
import {
  faCheckCircle,
  faClose,
  faCross,
  faExclamationCircle,
  faPencil,
  faPlusCircle,
  faTrash,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { TodoService } from '../../../../cores/services/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css',
})
export class TodoDetailComponent {
  icons = {
    confirm: faExclamationCircle,
    edit: faPencil,
    remove: faTrash,
    checklist: faCheckCircle,
    cancel: faClose,
    restore: faUndo,
  };

  isEdit: boolean = false;
  isConfirmRemove: boolean = false;
  @Input() todo!: ITodo;
  @Input() forTrash: boolean = false;

  constructor(private todoService: TodoService) {}

  remove() {
    this.todoService.removeTodo(this.todo.id);
    this.todoService.moveToTrash(this.todo);
  }

  edit() {
    this.isEdit = !this.isEdit;
  }

  getClass(isDone: boolean) {
    if (isDone) {
      return 'text-decoration-line-through';
    }

    return '';
  }

  restore() {
    this.todoService.restore(this.todo.id);
  }
}