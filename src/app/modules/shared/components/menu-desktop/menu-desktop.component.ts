import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { ModalService } from 'src/app/services/modal.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-menu-desktop',
  templateUrl: './menu-desktop.component.html',
  styleUrls: ['./menu-desktop.component.scss']
})
export class MenuDesktopComponent implements OnInit{
  user : Partial<User> | null = null;
  constructor(
    private storeService: StoreService,
    private authService : AuthService,
    private dialog: Dialog,
    private modalService: ModalService
    ){

  }
  ngOnInit(): void {
    this.getUserLogged();
   }
  getUserLogged(){
    this.storeService.user$.subscribe(user =>{
      this.user = user;
    });
  }
  showImage(image:string){
    this.modalService.showAlert(image,this.dialog);
  }
  logout(){
    this.authService.logout();
  }
}
