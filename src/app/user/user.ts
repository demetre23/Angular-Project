import { Component, input, Input, output, Output, EventEmitter} from '@angular/core';
import { required } from '@angular/forms/signals';

interface User{
  id: string;
    avatar: string;
    name: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})

export class UserComponent {
  @Input({required: true}) user!: User;
  @Output() select = new  EventEmitter();

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);  
  }
}
