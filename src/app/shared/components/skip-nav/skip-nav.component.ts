import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'skip-nav',
    templateUrl: './skip-nav.component.html',
    styleUrls: ['./skip-nav.component.css']
})
export class SkipNavComponent implements OnInit {
    showMenu: boolean = false;

    mainContentLink!: string;
    skipMenuTogglerLink!: string;

    constructor(public router: Router) { }

    ngOnInit(): void {
        this.mainContentLink = this.router.url + '#MainContent'
        this.skipMenuTogglerLink = this.router.url + '#SkipMenuToggler';
    }

    toggleShowmenu(): void {
        this.showMenu = !this.showMenu;
    }
}
