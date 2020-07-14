import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: User;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  navigate(user): void {
    // this.router.navigate(['user', user.id], {state: {currentObject: user}});
    this.router.navigate(['user', user.id], {state: {user}});
  }
}
