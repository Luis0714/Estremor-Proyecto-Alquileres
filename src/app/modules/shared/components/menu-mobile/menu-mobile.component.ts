import { Component, Input, OnInit } from '@angular/core';
import { faRightFromBracket, faEnvelope, faXmark,faUsers,faPhone, faUserSecret} from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent implements OnInit{
  user : Partial<User> | null = null;
  faRightFromBracket = faRightFromBracket;
  faUsers = faUsers;
  faPhone = faPhone;
  faUserSecret = faUserSecret;
  faEnvelope = faEnvelope;
  faXmark = faXmark;

  constructor(private storeService: StoreService, private authService : AuthService)
  {}
  ngOnInit(): void {
   this.getUserLogged();
  }

  getUserLogged(){
    this.storeService.user$.subscribe(user =>{
      this.user = user;
    });
  }
  logout(){
    this.authService.logout();
  }
}
