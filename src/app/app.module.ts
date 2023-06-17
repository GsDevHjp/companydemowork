import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatChipsModule } from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { WebdesignComponent } from './webdesign/webdesign.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { UsertableComponent } from './usertable/usertable.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebdesignComponent,
    FormComponent,
    UsertableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatCardModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    NgbModule,
    MatButtonModule,
    FontAwesomeModule,
    HttpClientModule,
    MatTableModule,
    MatTableModule,
    MatDialogModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }

