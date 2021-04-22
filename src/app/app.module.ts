import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RangesComponent } from './ranges/ranges.component';
import { RangesDetailsComponent } from './ranges-details/ranges-details.component';
import { AddRangeComponent } from './add-range/add-range.component';
import { NumbersComponent } from './numbers/numbers.component';
import { NumbersDetailsComponent } from './numbers-details/numbers-details.component';
import { AddNumberComponent } from './add-number/add-number.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialog, MatDialogModule, MatDividerModule } from '@angular/material';
import { AssignComponentComponent } from './assign-component/assign-component.component';
import { DialogComponent } from './dialog/dialog.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    RangesComponent,
    RangesDetailsComponent,
    AddRangeComponent,
    NumbersComponent,
    NumbersDetailsComponent,
    AddNumberComponent,
    HeaderComponent,
    FooterComponent,
    NavigationMenuComponent,
    AssignComponentComponent,
    DialogComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatTabsModule,
    MatDividerModule,
    MatDialogModule,
  ],
  providers: [],
  entryComponents: [
    DialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
