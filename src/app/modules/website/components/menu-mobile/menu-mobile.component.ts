import { Component, Input } from '@angular/core';
import { faRightFromBracket, faEnvelope, faXmark,faUsers,faPhone, faUserSecret} from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/user.model';
import { Environment } from 'src/environments/environment';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent {
  faRightFromBracket = faRightFromBracket;
  faUsers = faUsers;
  faPhone = faPhone;
  faUserSecret = faUserSecret;
  faEnvelope = faEnvelope;
  faXmark = faXmark;
  urlServer = `${Environment.FileUrl}` ;
  @Input() showMenu: boolean = false;
  @Input() user: User | null = null;
  @Input() handleClose: (() => void) | undefined;

  constructor()
  {

  }
}
