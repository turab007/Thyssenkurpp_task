import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';
import teasers from '../teaser.json';
import { MatDialog } from '@angular/material/dialog';
import { SettingsDialogComponent } from '../settings-dialog/settings-dialog.component';

@Component({
  selector: 'app-teaser-main',
  templateUrl: './teaser-main.component.html',
  styleUrls: ['./teaser-main.component.css'],
})
export class TeaserMainComponent implements OnInit {
  teasers = teasers;
  searchFireldFormControl = new FormControl();
  formCtrlSub!: Subscription;
  dateFilterForm: FormGroup;
  column_size = '4';
  columnCount4 = true;
  starting_date: string;
  ending_date: string;
  filter_term: string;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    console.log('This is teaser main ', teasers);
  }
  ngOnInit(): void {}
  searchByDate() {
    let startDate = new Date(this.starting_date);
    let endDate = new Date(this.ending_date);
    this.teasers = [];
    teasers.filter((value) => {
      let dateObj = new Date(value.date);
      if (startDate.getTime() <= dateObj.getTime()) {
        this.teasers.push(value);
      }
    });
    console.log('This is the value', startDate, endDate);
  }

  // fromDate: string='';
  // toDate: string='';
  // sortByDate!: boolean;
  // searchTerm!: string;

  // get filteredTeasers() {
  //   let filtered = this.teasers;

  //   if (this.fromDate) {
  //     filtered = filtered.filter(teaser => new Date(teaser.date) >= new Date(this.fromDate));
  //   }

  //   if (this.toDate) {
  //     filtered = filtered.filter(teaser => new Date(teaser.date) <= new Date(this.toDate));
  //   }

  //   if (this.sortByDate) {
  //     filtered = filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  //   }

  //   if (this.searchTerm) {
  //     filtered = filtered.filter(teaser => {
  //       return teaser.heading.toLowerCase().includes(this.searchTerm.toLowerCase())
  //         || teaser.tags.some(tag => tag.toLowerCase().includes(this.searchTerm.toLowerCase()));
  //     });
  //   }

  //   return filtered;
  // }

  filter_Data() {
    let keyword = this.filter_term;
    let temp = [];
    temp = this.teasers.filter((value) => {
      console.log(
        'check',
        value.heading.indexOf(keyword),
        value.tags.indexOf(keyword)
      );
      if (value.heading.indexOf(keyword) == -1) {
        if (value.tags.indexOf(keyword) == -1) {
          return null;
        }
      }
      return value;
    });
    this.teasers = temp;
    console.log(temp);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SettingsDialogComponent, {
      data: {
        column_size: this.column_size,
        starting_date: this.starting_date,
        ending_date: this.ending_date,
        filter_term: this.filter_term,
      },
      width: '400px',
      height: '350px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.column_size) {
        console.log('The dialog was closed', result);
        this.column_size = result.column_size;
        if (this.column_size == '4') {
          this.columnCount4 = true;
        } else {
          this.columnCount4 = false;
        }
        // this.animal = result;
      }
      if (result.filter_term) {
        this.filter_term = result.filter_term;
        this.filter_Data();
      }
      if (result.teaserArr) {
        this.teasers = result.teaserArr;
      }

      if (result.starting_date && result.ending_date) {
        this.starting_date = result.starting_date;
        this.ending_date = result.ending_date;
        this.searchByDate();
      }
    });
  }
}
