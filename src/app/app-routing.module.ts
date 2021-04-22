import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RangesComponent } from './ranges/ranges.component';
import { RangesDetailsComponent } from './ranges-details/ranges-details.component';
import { AddRangeComponent } from './add-range/add-range.component';
import { NumbersComponent } from './numbers/numbers.component';
import { NumbersDetailsComponent } from './numbers-details/numbers-details.component';
import { AddNumberComponent } from './add-number/add-number.component';
import { MessageComponent } from './message/message.component';


const routes: Routes = [
  {
    path: 'ranges',
    component: RangesComponent,
    data: { title: 'List of Ranges' }
  },
  {
    path: 'add-range',
    component: AddRangeComponent,
    data: { title: 'Add Range' }
  },
  {
    path: 'messages',
    component: MessageComponent,
    data: { title: 'List of Messages' }
  },
  {
    path: 'numbers',
    component: NumbersComponent,
    data: { title: 'List of Numbers' }
  },
  {
    path: 'add-number',
    component: AddNumberComponent,
    data: { title: 'Add Number' }
  },
 
  { path: '**',
    redirectTo: '/ranges',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
