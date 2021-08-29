import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

import { ISiteFavorite } from '../interfaces/iSiteFavorite';
import { IFictionFavorite } from '../interfaces/iFictionFavorite';
import { IYouTubeFavorite } from '../interfaces/iYouTubeFavorite';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FavoritesService {
    constructor(private http: HttpClient) { }

    favDevSites: ISiteFavorite[] | null = null;
    favYouTubeChannels: IYouTubeFavorite[] | null = null;

    favShortStories: IFictionFavorite[] = [
        {
            id: 901,
            title: 'The Library of Babel',
            author: 'Jorge Luis Borges',
            type: 'short story',
            goodreadsUrl: 'https://www.goodreads.com/book/show/172366.The_Library_of_Babel',
            publicationYear: 1941
        },
        {
            id: 902,
            title: 'Barn Burning',
            author: 'William Faulkner',
            type: 'short story',
            goodreadsUrl: 'https://www.goodreads.com/book/show/3120865-barn-burning',
            publicationYear: 1939
        },
        {
            id: 903,
            title: 'Young Goodman Brown',
            author: 'Nathaniel Hawthorne',
            type: 'short story',
            goodreadsUrl: 'https://www.goodreads.com/book/show/562471.Young_Goodman_Brown',
            publicationYear: 1835
        },
        {
            id: 904,
            title: 'The Judgment',
            author: 'Franz Kafka',
            type: 'short story',
            goodreadsUrl: 'https://www.goodreads.com/book/show/16244632-the-judgment',
            publicationYear: 1913
        },
        {
            id: 905,
            title: 'Recitatif',
            author: 'Toni Morrison',
            type: 'short story',
            goodreadsUrl: 'https://www.goodreads.com/en/book/show/34842610-recitatif',
            publicationYear: 1983
        },
        {
            id: 906,
            title: 'The Oblong Box',
            author: 'Edgar Allan Poe',
            type: 'short story',
            goodreadsUrl: '',
            publicationYear: 1844
        }
    ];

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
    getFavoriteShortStories(): IFictionFavorite[] {
        return this.favShortStories;
    }

    pullFavoriteShortStories(): Observable<any> {
        let uri: string = './assets/data/favorite-short-stories.json';
        return this.http.get<IFictionFavorite[] | null>(uri);
    }

    /* Fiction Specifics By ID 
     * (Can be short story, novella, novel, etc.) */
    getFictionFavoriteById(id: number): IFictionFavorite | null {
        let result: IFictionFavorite | null = this.favShortStories
            .filter(sh => sh.id === id)
            .shift() || null;
        return result;
    }

    pullFictionFavoriteById(id: number): IFictionFavorite | null {
        console.log('not implemented');        
        return null;
    }
}
