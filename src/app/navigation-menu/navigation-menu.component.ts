import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent {
  links: any[];
  activeLinkIndex = -1; 
  constructor(private router: Router) {
    this.links = [
        {
            label: 'Ranges',
            link: './ranges',
            index: 0
        }, {
            label: 'Numbers',
            link: './numbers',
            index: 1
        }, 
        {
          label: 'Messages',
          link: './messages',
          index: 2
      },
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.links.indexOf(this.links.find(tab => tab.link === '.' + this.router.url));
  });
}
}
