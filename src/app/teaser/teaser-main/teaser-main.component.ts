import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';
import teasers from '../teaser.json';

@Component({
  selector: 'app-teaser-main',
  templateUrl: './teaser-main.component.html',
  styleUrls: ['./teaser-main.component.css'],
})
export class TeaserMainComponent implements OnInit {
  teasers = teasers;
  searchField: string = '';
  searchFireldFormControl = new FormControl();
  formCtrlSub!: Subscription;
  dateFilterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    console.log('This is teaser main ', teasers);
  }
  ngOnInit(): void {
    this.dateFilterForm = this.fb.group({
      dateFrom: [''],
      dateTo: [''],
    });
    this.formCtrlSub = this.searchFireldFormControl.valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((term) => {
        this.filter_Data(term);
        console.log('This is the term', term);
      });
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

  filter_Data(keyword: string) {
    this.teasers = teasers;
    this.teasers = this.teasers.filter((value) => {
      console.log('check', value.heading.indexOf(keyword) , value.tags.indexOf(keyword)
      )
      if(value.heading.indexOf(keyword)== -1) {
        if (value.tags.indexOf(keyword)== -1)
        {
          return null
        }
      }
      return value
    });
  }

  searchByDate() {
    let startDate = new Date(this.dateFilterForm.controls['dateFrom'].value);
    let endDate = new Date(this.dateFilterForm.controls['dateTo'].value);
    this.teasers = []
    teasers.filter((value=> {
      let dateObj = new Date(value.date);
      if (startDate.getTime() <= dateObj.getTime())
      {
        this.teasers.push(value)
        console.log('Between')
      }

    let dateKeys=value.date || {};
    dateKeys = Object.keys(dateKeys)
    }))

    console.log('This is the value', startDate, endDate);
  }
}
