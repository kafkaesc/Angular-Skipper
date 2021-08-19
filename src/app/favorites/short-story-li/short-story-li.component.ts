import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IFictionFavorite } from 'src/app/core/interfaces/iFictionFavorite';

@Component({
    selector: 'short-story-li',
    templateUrl: './short-story-li.component.html',
    styleUrls: ['./short-story-li.component.css']
})
export class ShortStoryLiComponent implements OnInit {
    @Input() shortStory!: IFictionFavorite;

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    gotoStory(): void {
        this.router.navigate(['/ShortStories/', this.shortStory.id]);
    }
}
