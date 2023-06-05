import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import teasers from '../teaser.json';
import { MatDialog } from '@angular/material/dialog';
import { SettingsDialogComponent } from '../settings-dialog/settings-dialog.component';
import { DetailViewComponent } from '../detail-view/detail-view.component';
import { teaser } from '../teaser';

@Component({
  selector: 'app-teaser-main',
  templateUrl: './teaser-main.component.html',
  styleUrls: ['./teaser-main.component.css'],
})
export class TeaserMainComponent implements OnInit {
  teasers: teaser[] = teasers;
  searchFireldFormControl = new FormControl();
  formCtrlSub!: Subscription;
  dateFilterForm: FormGroup;
  column_size = '4';
  columnCount4 = true;
  starting_date: string;
  ending_date: string;
  filter_term: string;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {}
  ngOnInit(): void {}

  searchByDate() {
    let startDate = new Date(this.starting_date);
    let endDate = new Date(this.ending_date);
    this.teasers = [];
    teasers.filter((value) => {
      let dateObj = new Date(value.date);
      if (startDate && endDate) {
        if (
          startDate.getTime() <= dateObj.getTime() &&
          endDate.getTime() >= dateObj.getTime()
        ) {
          this.teasers.push(value);
        }
      } else if (startDate.getTime() <= dateObj.getTime() && endDate == null) {
        this.teasers.push(value);
      } else if (endDate.getTime() >= dateObj.getTime() && startDate == null) {
        this.teasers.push(value);
      }
    });
  }

  filter_Data() {
    let keyword = this.filter_term;
    let temp = [];
    temp = this.teasers.filter((value) => {
      let found = false;
      console.log(
        'check',
        value.heading.indexOf(keyword),
        value.tags.indexOf(keyword)
      );
      if (value.heading.indexOf(keyword) != -1) {
        found = true;
      }
      else {
        value.tags.forEach((tag) => {
          if (tag.indexOf(keyword) != -1) {
            found=true;
          }
        });
      }
      if(found) {
        return value
      }
      else {
        return null
      }
    });
    this.teasers = temp;
    console.log(temp);
  }

  sort(sort_type: string) {
    let temp = this.teasers;
    if (sort_type == 'asc') {
      temp.sort((a: teaser, b: teaser) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
    } else if (sort_type == 'desc') {
      temp.sort((a: teaser, b: teaser) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SettingsDialogComponent, {
      data: {
        column_size: this.column_size,
        starting_date: this.starting_date,
        ending_date: this.ending_date,
        filter_term: this.filter_term,
      },
      width: '600px',
      height: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.clear) {
        this.teasers = teasers;
      }
      if (result.column_size) {
        this.column_size = result.column_size;
        if (this.column_size == '4') {
          this.columnCount4 = true;
        } else {
          this.columnCount4 = false;
        }
      }
      if (result.filter_term) {
        this.filter_term = result.filter_term;
        this.filter_Data();
      }
      if (result.teaserArr) {
        this.teasers = result.teaserArr;
      }

      if (result.starting_date || result.ending_date) {
        this.starting_date = result.starting_date;
        this.ending_date = result.ending_date;
        this.searchByDate();
      }
      if (result.sort) {
        this.sort(result.sort);
      }
    });
  }

  openDetail(item: teaser) {
    this.dialog.open(DetailViewComponent, {
      data: {
        all_items: this.teasers,
        selected_item: item,
      },
    });
  }
}
