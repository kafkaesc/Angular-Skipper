import { Component, OnInit } from '@angular/core';
import { ISiteFavorite } from 'src/app/core/interfaces/iSiteFavorite';
import { FavoritesService } from 'src/app/core/services/favorites.service';

@Component({
	selector: 'dev',
	templateUrl: './dev.component.html',
	styleUrls: ['./dev.component.css'],
})
export class DevComponent implements OnInit {
	favList: ISiteFavorite[] | null = null;

	constructor(private favoritesService: FavoritesService) {}

	ngOnInit(): void {
		this.favList = this.favoritesService.getFavoriteDevSites();
		if (!this.favList) {
			this.favoritesService.pullFavoriteDevSites().subscribe(
				(res) => (this.favList = res),
				(err) => console.log('Error pulling favorite dev sites: ', err)
			);
		}
	}
}
