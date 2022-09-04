import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  userService: UserService;
  users: User[] = [];
  isAddForm: boolean = true;
  isEditForm: boolean = false;
  currentUser: User;
  title = 'crud_user';
  ngOnInit(): void {
    this.refreshData();
  }
  constructor(userService: UserService) {
    this.userService = userService;
    this.currentUser = { id: 0, firstName: '', lastName: '' };
  }
  ngOnDestroy(): void {}
  editUser(user: User): void {
    if (!user) {
      this.isAddForm = false;
      this.isEditForm = true;
    }
    this.userService.putData(user).subscribe((data: User) => {
      const index = this.users.findIndex((user) => user.id === data.id);
      this.users[index] = data;
    });
  }
  removeUser(user: User): void {
    debugger;
    this.userService.deleteData(user.id).subscribe((data: User) => {
      const index = this.users.findIndex((user) => user.id === data.id);
      this.users.splice(index, 0);
    });
  }
  saveUser() {
    this.userService.postData(this.currentUser).subscribe((data: User) => {
      this.users.push(data);
    });
  }

  refreshData() {
    this.userService.getAllData().subscribe((data: User[]) => {
      this.users = data;
    });
  }
}
