import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { teaser } from '../teaser';

export interface DialogData {
  selected_item: teaser;
  all_items: teaser[];
}

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css'],
})
export class DetailViewComponent {
  constructor(
    public dialogRef: MatDialogRef<DetailViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.selected_item = data.selected_item;
    this.teaser_list = data.all_items;
  }
  selected_item: teaser;
  teaser_list: teaser[];

  next(command: string) {
    let index = this.teaser_list.indexOf(this.selected_item);
    if (command == 'next') {
      this.selected_item = this.teaser_list[index + 1];
      console.log(index);
    }
    if (command == 'previous') {
      this.selected_item = this.teaser_list[index - 1];
    }
  }
  hasNext(command: string): boolean {
    let index = this.teaser_list.indexOf(this.selected_item);
    if (command === 'next') {
      if (index >= this.teaser_list.length - 1) {
        return true;
      } else return false;
    } else {
      if (command === 'previous') {
        if (index <= 0) {
          return true;
        } else {
          return false;
        }
      }
    }
    return false;
  }
}
