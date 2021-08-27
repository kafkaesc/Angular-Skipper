import { Location } from '@angular/common';
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
        let path = window.location.pathname;
        this.mainContentLink = path + '#MainContent';
     }

    ngOnInit(): void {
    }

    updateLink(): void {
        let path = window.location.pathname;
        this.mainContentLink = path + '#MainContent';
    }
}
