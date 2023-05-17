import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';
import teasers from '../teaser.json';

export interface DialogData {
  columnCount4: boolean;
  column_size: string;
  filter_term: string;
  starting_date: string;
  ending_date: string;
  teaserArr: any[];
  clear: boolean;
}

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.css'],
})
export class SettingsDialogComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SettingsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.column_size = data.column_size;
    this.filter_term = data.filter_term;
    console.log(this.column_size);
  }

  dateFilterForm: FormGroup;
  column_size = '4';
  columnCount4: boolean = true;
  searchField: string = '';
  searchFireldFormControl = new FormControl();
  formCtrlSub!: Subscription;
  filter_term: string = '';
  teasers = teasers;

  ngOnInit(): void {
    this.dateFilterForm = this.fb.group({
      dateFrom: [this.data.starting_date],
      dateTo: [this.data.ending_date],
    });
    this.searchFireldFormControl.patchValue(this.data.filter_term);
    this.formCtrlSub = this.searchFireldFormControl.valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((term) => {
        this.filter_term = term;
        console.log('This is the term', term);
      });
  }

  // searchByDate() {
  //   let startDate = new Date(this.dateFilterForm.controls['dateFrom'].value);
  //   let endDate = new Date(this.dateFilterForm.controls['dateTo'].value);
  //   this.teasers = [];
  //   teasers.filter((value) => {
  //     let dateObj = new Date(value.date);
  //     if (startDate.getTime() <= dateObj.getTime()) {
  //       this.teasers.push(value);
  //     }
  //   });
  //   console.log('This is the value', startDate, endDate);
  // }

  changeColumnNo() {
    if (this.column_size == '4') {
      this.columnCount4 = true;
    } else {
      this.columnCount4 = false;
    }

    console.log(this.columnCount4);
  }

  close(clear: boolean) {
    if (clear) {
      this.dialogRef.close({
        clear: clear,
      });
    } else {
      this.dialogRef.close({
        column_size: this.column_size,
        filter_term: this.filter_term,
        starting_date: this.dateFilterForm.controls['dateFrom'].value,
        ending_date: this.dateFilterForm.controls['dateTo'].value,
      });
    }
  }
}
