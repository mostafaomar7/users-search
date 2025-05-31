import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user.model';
// interface User {
//   img?: string;
//   name?: string;
//   email: string;
//   phone?: string;
//   verfied?: boolean;
// }

@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  styleUrls: ['./main.css'],
  imports: [CommonModule , FormsModule]     
})
export class Main {

@Input() namefromparent: User[] = [];

searchEmail: string = '';
filteredUsers: User[] = [];
hasSearched: boolean = false;

ngOnInit() {
  this.filteredUsers = this.namefromparent;
}

searchByEmail() {
  const email = this.searchEmail.trim().toLowerCase();

  if (!email) {
    this.filteredUsers = this.namefromparent;
    this.hasSearched = false;
    return;
  }

  this.filteredUsers = this.namefromparent.filter(user =>
    user.email && user.email.toLowerCase().includes(email)
  );
  this.hasSearched = true;
}

resetSearch() {
  this.searchEmail = '';
  this.filteredUsers = this.namefromparent;
  this.hasSearched = false;
}


}


