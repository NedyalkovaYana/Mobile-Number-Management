import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { NumberData } from '../_models/number-data.model';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
  dataSource: MatTableDataSource<NumberData[]>;
  animal: string;
  name: string;
  private id: string;
  displayedColumns: string[] = ['number', 'state', 'originator', 'recipient', 'action'];
  originatorList = ['CGI', 'TISMI', 'SYSTEMX', 'SYSTEMY'];
  data: NumberData[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getTableData(this.id);
  }

  getTableData(id: string): void {
    this.api.getNumbers(this.id)
      .subscribe((res: any) => {
        this.dataSource = res;
        console.log('numbers');
        console.log(this.dataSource);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }


  openDialog(element: NumberData): void {
    const dialogRef = this.dialog.open(DialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      let number: NumberData = {number: element.number, rangeid:this.id, recipient: result};
      this.api.assignNumber(number).subscribe(res => {
        this.getTableData(this.id);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });

    });
  
  }

  unassign(element: NumberData) {
    let number: NumberData = {number: element.number, rangeid:this.id};

      this.api.unassignNumber(number).subscribe(res => {
        this.getTableData(this.id);
      })
  }

  deleteNumber(number: any) {
    /* this.isLoadingResults = true;
    this.api.deleteNumber(number)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.api.getNumbers('test');
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      ); */
  }

}
