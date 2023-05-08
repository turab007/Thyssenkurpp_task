import { Component, Input } from '@angular/core';
import { menuItem } from '../menuItem.model';

@Component({
  selector: 'app-reuseable-menu',
  templateUrl: './reuseable-menu.component.html',
  styleUrls: ['./reuseable-menu.component.css'],
})
export class ReuseableMenuComponent {
  @Input() list: menuItem[];
}
