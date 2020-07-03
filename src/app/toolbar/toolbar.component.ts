import { Component, Input } from '@angular/core';
import { UsersService } from '../core/users/users.service';

@Component({
   selector: 'app-toolbar',
   templateUrl: './toolbar.component.html',
   styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
   @Input() title = '';
   isAdmin = this.userService.isAdmin;

   constructor(private userService: UsersService) {}
}
