import { Component } from '@angular/core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-logout',
  templateUrl: './home-logout.component.html',
  styleUrls: ['./home-logout.component.scss']
})
export class HomeLogoutComponent {
  faAngleUp = faAngleUp;
}
