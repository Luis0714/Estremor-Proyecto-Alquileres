import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
 @Input() type: 'button' | 'reset' | 'submit' = 'button';
 @Input() variant:''|'outline-' = '';
 @Input() size:'sm'|'lg' = 'sm';
 @Input() background:string = 'blue';
 @Input() textColor:string = 'green';
 @Input() backgroundHover:string = 'white';
 @Input() textColorHover:string = 'FFFFFF';
 botonEstilos: { [klass: string]: any } =
 {
 'backgroud': this.background,
 'border': `2px solid ${this.textColor}`,
 'color': this.textColor,
 ':hover':{'color': 'blue'}
 };
}
