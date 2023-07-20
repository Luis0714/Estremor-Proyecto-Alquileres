import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Environment } from 'src/environments/environment';

@Component({
  selector: 'app-menu-desktop',
  templateUrl: './menu-desktop.component.html',
  styleUrls: ['./menu-desktop.component.scss']
})
export class MenuDesktopComponent  {
  urlServer = `${Environment.FileUrl}`;
  @Input() user: User | null = null;
  constructor(
    // private autorizacionService : AutorizationService
    ){

  }

  // loggout(){
  //   console.log('saliendo....')
  //   this.autorizacionService.Loggout()
  // }

}