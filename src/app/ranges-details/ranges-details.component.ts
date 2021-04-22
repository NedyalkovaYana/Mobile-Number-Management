import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ranges-details',
  templateUrl: './ranges-details.component.html',
  styleUrls: ['./ranges-details.component.css']
})
export class RangesDetailsComponent implements OnInit {
  isLoadingResults = true;
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
  }

  deleteRange(id: any) {
    this.isLoadingResults = true;
    this.api.deleteRange(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/ranges']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}
