import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

import { ISiteFavorite } from '../interfaces/iSiteFavorite';
import { IFictionFavorite } from '../interfaces/iFictionFavorite';
import { IYouTubeFavorite } from '../interfaces/iYouTubeFavorite';
import { Observable, from } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FavoritesService {
    constructor(private http: HttpClient) { }

    favDevSites: ISiteFavorite[] | null = null;
    favShortStories: IFictionFavorite[] | null = null;
    favYouTubeChannels: IYouTubeFavorite[] | null = null;

    /* Dev Site Favorites */
    getFavoriteDevSites(): ISiteFavorite[] | null {
        return this.favDevSites;
    }

    pullFavoriteDevSites(): Observable<any> {
        let uri: string = './assets/data/favorite-dev-sites.json';
        this.http.get<ISiteFavorite[] | null>(uri).subscribe(
            res => this.favDevSites = res
        );
        return this.http.get<ISiteFavorite[] | null>(uri);
    }

    /* YouTube Channel Favorites */
    getFavoriteYouTubeChannels(): IYouTubeFavorite[] | null {
        return this.favYouTubeChannels;
    }

    pullFavoriteYouTubeChannels(): Observable<any> {
        let uri: string = './assets/data/favorite-youtube-channels.json';
        this.http.get<IYouTubeFavorite[] | null>(uri).subscribe(
            res => this.favYouTubeChannels = res
        );
        return this.http.get<IYouTubeFavorite[] | null>(uri);
    }

    /* Short Story Favorites */
    getFavoriteShortStories(): IFictionFavorite[] | null {
        return this.favShortStories;
    }

    pullFavoriteShortStories(): Observable<any> {
        let uri: string = './assets/data/favorite-short-stories.json';
        this.http.get<IFictionFavorite[] | null>(uri).subscribe(
            res => this.favShortStories = res
        );
        return this.http.get<IFictionFavorite[] | null>(uri);
    }

    /* Fiction Specifics By ID 
     * (Can be short story, novella, novel, etc.) */
    getFictionFavoriteById(id: number): IFictionFavorite | null {
        let result: IFictionFavorite | null = this.favShortStories
            ?.filter(sh => sh.id === id)
            .shift() || null;
        return result;
    }

    pullFictionFavoriteById(id: number): IFictionFavorite | null {
        console.log('not implemented');        
        return null;
    }
}
