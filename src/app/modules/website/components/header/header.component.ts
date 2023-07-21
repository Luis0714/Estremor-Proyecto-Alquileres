import { Component, OnInit } from '@angular/core';
import { faAngleUp, faAngleDown, faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { faRightFromBracket,faUsers,faPhone, faUserSecret} from '@fortawesome/free-solid-svg-icons';
import { Dialog } from '@angular/cdk/dialog';
import { User } from 'src/app/models/user.model';
import { Environment } from 'src/environments/environment';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  user : User | null = null;
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;
  faBars = faBars;
  faXmark = faXmark;
  faRightFromBracket = faRightFromBracket;
  faUsers = faUsers;
  faPhone = faPhone;
  faUserSecret = faUserSecret;
  isMenuOpen: boolean = false;
  urlServer = `${Environment.FileUrl}` ;
  defaultImage = ''
  openSesion = false;

  constructor(
  //  private autorizationService : AutorizationService,
   private router : Router,
  ){

  }

  ngOnInit(): void {
    //this.getUserLogged()
   // this.autorizationService.getProfile().subscribe();
  }

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
     console.log(this.isMenuOpen)
  }

  toggleMenuMobile() {
    this.isMenuOpen = !this.isMenuOpen;
    this.router.navigateByUrl('/menu-moblie')
  }

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }

  // getUserLogged(){
  //   this.autorizationService.user$
  //   .subscribe(user => {
  //     this.user = user;
  //     console.log('El user', this.user)
  //   });
  // }
}