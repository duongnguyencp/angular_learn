import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from './model/User';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
    
  }
  
}
