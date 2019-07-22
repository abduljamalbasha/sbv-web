import { Injectable } from '@angular/core';
import { Users } from '../models/user.module';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser:Users;
  users:Users[];

  constructor() { }
}
