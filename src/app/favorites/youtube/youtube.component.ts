import { Component, OnInit } from '@angular/core';
import { IYouTubeFavorite } from 'src/app/core/interfaces/iYouTubeFavorite';
import { FavoritesService } from 'src/app/core/services/favorites.service';

@Component({
	selector: 'youtube',
	templateUrl: './youtube.component.html',
	styleUrls: ['./youtube.component.css'],
})
export class YoutubeComponent implements OnInit {
	favList: IYouTubeFavorite[] | null = null;

	constructor(private favoriteService: FavoritesService) {}

	ngOnInit(): void {
		this.favList = this.favoriteService.getFavoriteYouTubeChannels();
		if (!this.favList) {
			this.favoriteService.pullFavoriteYouTubeChannels().subscribe(
				(res) => (this.favList = res),
				(err) => console.log('Error pulling favorite YouTube channels: ', err)
			);
		}
	}
}
