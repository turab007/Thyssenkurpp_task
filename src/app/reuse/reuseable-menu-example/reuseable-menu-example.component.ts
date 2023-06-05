import { Component } from '@angular/core';
import { menuItem } from '../menuItem.model';

@Component({
  selector: 'app-reuseable-menu-example',
  templateUrl: './reuseable-menu-example.component.html',
  styleUrls: ['./reuseable-menu-example.component.css'],
})
export class ReuseableMenuExampleComponent {
  menuData: menuItem[] = [
    { name: 'Beratung', active: false, icon: 'block', link: '' },
    { name: 'Logistik', active: false, icon: 'home', link: '' },
    { name: 'Sortiments', active: false, icon: 'bolt', link: '' },
    { name: 'Sortiments', active: false, icon: 'remove', link: '' },
    { name: 'Sortiments', active: false, icon: 'home', link: '' },
  ];
}
