import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { RangeData } from '../_models/range-data.model';

@Component({
  selector: 'app-ranges',
  templateUrl: './ranges.component.html',
  styleUrls: ['./ranges.component.css']
})
export class RangesComponent implements OnInit {
  dataSource: MatTableDataSource<RangeData[]>;
  test: RangeData[];
  displayedColumns: string[] = ['begin', 'end', 'originator',  'action'];
  data: RangeData[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getRanges()
    .subscribe((res: any) => {
      this.dataSource = res;
      this.test = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  deleteRange(id: any) {
    /* this.isLoadingResults = true;
    this.api.deleteRange(id)
      .subscribe(res => {
          this.isLoadingResults = false;
         //this.dataSource =  this.test.filter((data: RangeData) => data.id != id);
          this.api.getRanges();
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      ); */
  }

  getNumbersForRange(id: any) {
    this.router.navigate(['/numbers',{​​​​​​​​ id: id}​​​​​​​​]);
  }
}
