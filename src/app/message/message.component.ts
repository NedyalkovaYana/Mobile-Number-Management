import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MessageData } from '../_models/message-data';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, OnDestroy {
  dataSource: MatTableDataSource<MessageData[]>;
  displayedColumns: string[] = ['oa', 'da', 'body', 'date'];
  data: MessageData[] = [];
  isLoadingResults = true;
  refresh: any; 

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getUpdatedMessages(); 
    this.refresh = setInterval(() => {
      this.getUpdatedMessages(); 
    }, 2000);
  }

  getUpdatedMessages() {
    console.log('interval');
    this.api.getMessages()
    .subscribe((res: any) => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  ngOnDestroy() {
    if (this.refresh) {
      clearInterval(this.refresh);
    }
  }
}
