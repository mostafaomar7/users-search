import { Component } from '@angular/core';
import { Main } from '../main/main';
import { User } from '../models/user.model';
// interface User {
//   img?: string;
//   name?: string;
//   email?: string;
//   phone?: string;
//   verfied?: boolean;
// }

@Component({
  selector: 'app-userdata',
  imports: [Main],            
  templateUrl: './userdata.html',
  styleUrls: ['./userdata.css']
})
export class Userdata {
  user: User[] = [
    { img: 'pro1.png', name: 'John Doe', email: 'a@gmail.com', phone: '1234567890', verfied: true },
    { img: 'pro2.jpg', name: 'Jane Smith', email: 'b@gmail.com', phone: '0987654321', verfied: false },
    { img: 'pro1.png', name: 'Alice Johnson', email: 'c@gmail.com', phone: '1122334455', verfied: true },
    { img: 'pro2.jpg', name: 'Bob Brown', email: 'd@gmail.com', phone: '5566778899', verfied: false },
    { img: 'pro1.png', name: 'Bob Brown', email: 'd@gmail.com', phone: '5566778899', verfied: true }
  ];
}
