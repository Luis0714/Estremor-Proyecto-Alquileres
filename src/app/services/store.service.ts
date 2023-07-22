import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  user = new BehaviorSubject<Partial<User> | null>(null);
  user$ = this.user.asObservable();

  constructor() { }
}
