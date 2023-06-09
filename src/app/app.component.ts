import { Component, ElementRef, ViewChild } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import { Observable, map, startWith } from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  toppings = new FormControl('');
  options:string[]= ['India','Nepal','Pakistan','England','Japan','Sri Lanka','China'];

  separatorKeysCodes: number[] = [ENTER, COMMA];
  countryCtrl = new FormControl('');
  filteredcountrys: Observable<string[]>;
  countrys: string[] = ['India'];
  allcountrys:string[]= ['Australia','Bermuda','Canada','Cameroon','Denmark','France','Finland','Germany','Brazil','Russia','Japan','Turkey'];

  @ViewChild('countryInput')
  countryInput!: ElementRef<HTMLInputElement>;

  constructor() {
    this.filteredcountrys = this.countryCtrl.valueChanges.pipe(
      startWith(null),
      map((country: string | null) => (country ? this._filter(country) : this.allcountrys.slice())),
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our Country
    if (value) {
      this.countrys.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.countryCtrl.setValue(null);
  }

  remove(country: string): void {
    const index = this.countrys.indexOf(country);

    if (index >= 0) {
      this.countrys.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.countrys.push(event.option.viewValue);
    this.countryInput.nativeElement.value = '';
    this.countryCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allcountrys.filter(country => country.toLowerCase().includes(filterValue));
  }
}

