import { Component, OnInit } from '@angular/core';
import { IFictionFavorite } from 'src/app/core/interfaces/iFictionFavorite';
import { FavoritesService } from 'src/app/core/services/favorites.service';

@Component({
    selector: 'short-stories',
    templateUrl: './short-stories.component.html',
    styleUrls: ['./short-stories.component.css']
})
export class ShortStoriesComponent implements OnInit {
    favList!: IFictionFavorite[];

    constructor(private favoriteService: FavoritesService) { }

    ngOnInit(): void {
        this.favList = this.favoriteService.getFavoriteShortStories();
    }
}
