import { Component, OnInit } from '@angular/core';
import { ISiteFavorite } from 'src/app/core/interfaces/iSiteFavorite';
import { FavoritesService } from 'src/app/core/services/favorites.service';

@Component({
    selector: 'app-dev',
    templateUrl: './dev.component.html',
    styleUrls: ['./dev.component.css']
})
export class DevComponent implements OnInit {
    favList!: ISiteFavorite[];
  
    constructor(private favoritesService: FavoritesService) { }

    ngOnInit(): void {
      this.favList = this.favoritesService.getFavoriteDevSites();
    }
}
