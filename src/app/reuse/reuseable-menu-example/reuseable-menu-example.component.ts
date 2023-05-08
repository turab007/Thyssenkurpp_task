import { Component } from '@angular/core';
import { menuItem } from '../menuItem.model';

@Component({
  selector: 'app-reuseable-menu-example',
  templateUrl: './reuseable-menu-example.component.html',
  styleUrls: ['./reuseable-menu-example.component.css'],
})
export class ReuseableMenuExampleComponent {
  menuData: menuItem[] = [
    { name: 'Beratung', active: false, icon: '' },
    { name: 'Logistik', active: false, icon: '' },
    { name: 'Sortiments', active: false, icon: '' },
  ];
}
