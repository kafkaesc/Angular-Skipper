import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'main-nav',
    templateUrl: './main-nav.component.html',
    styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
    mainContentLink = '';

    constructor(public router: Router) {
        this.mainContentLink = this.router.url + '#MainContent';
     }

    ngOnInit(): void {
    }
}
