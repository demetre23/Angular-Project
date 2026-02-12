import { Component, EventEmitter, Input, Output} from '@angular/core';
import { type Taskebi } from "./task.module"
import { EventInfoWrapper } from '@angular/core/primitives/event-dispatch';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})

export class Task {   
    @Input({required: true}) task!: Taskebi
    @Output() comlete = new EventEmitter<string>();

    onCompleteTask() {
      this.comlete.emit(this.task.id)
    }
}
