import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IFictionFavorite } from 'src/app/core/interfaces/iFictionFavorite';
import { FavoritesService } from 'src/app/core/services/favorites.service';

@Component({
	selector: 'short-story-details',
	templateUrl: './short-story-details.component.html',
	styleUrls: ['./short-story-details.component.css'],
})
export class ShortStoryDetailsComponent implements OnInit {
	shortStory!: IFictionFavorite;

	constructor(
		private favoritesService: FavoritesService,
		private route: ActivatedRoute,
		private router: RouterModule
	) {}

	ngOnInit(): void {
		const shortStoryId = Number(this.route.snapshot.paramMap.get('id'));
		let temp = this.favoritesService.getFictionFavoriteById(shortStoryId);
		if (temp) {
			this.shortStory = temp;
			console.log('short story: ', this.shortStory);
		} else {
			// TODO: upgrade with route guard
		}
	}
}
