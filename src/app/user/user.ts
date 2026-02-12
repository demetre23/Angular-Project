import { Component, input, Input, output, Output, EventEmitter} from '@angular/core';
import { required } from '@angular/forms/signals';
import { type User } from "./user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})

export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new  EventEmitter();

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);  
  }
}
