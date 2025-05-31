import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Userdata } from './userdata/userdata';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,           // لازم Standalone true
  imports: [RouterOutlet, CommonModule, Userdata],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'users-List';
}
