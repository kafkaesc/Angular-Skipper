import { Injectable } from '@angular/core';

import { ISiteFavorite } from '../interfaces/iSiteFavorite';
import { IFictionFavorite } from '../interfaces/iFictionFavorite';
import { IYouTubeFavorite } from '../interfaces/iYouTubeFavorite';

@Injectable({
    providedIn: 'root',
})
export class FavoritesService {
    constructor() { }

    favDevSites: ISiteFavorite[] = [
        {
            id: 201,
            sitename: 'Angular',
            url: 'https://angular.io/'
        },
        {
            id: 202,
            sitename: 'Mozilla MDN Web Docs',
            url: 'https://developer.mozilla.org/'
        },
        {
            id: 203,
            sitename: 'Web Content Accessibility Guidelines',
            url: 'https://www.w3.org/WAI/standards-guidelines/wcag/'
        },
        {
            id: 204,
            sitename: 'Stack Overflow',
            url: 'https://stackoverflow.com/'
        }
    ];

    favShortStories: IFictionFavorite[] = [
        {
            id: 904,
            title: 'The Library of Babel',
            author: 'Jorge Luis Borges',
            type: 'short story',
            goodreadsUrl: 'https://www.goodreads.com/book/show/172366.The_Library_of_Babel'
        },
        {
            id: 901,
            title: 'Barn Burning',
            author: 'William Faulkner',
            type: 'short story',
            goodreadsUrl: 'https://www.goodreads.com/book/show/3120865-barn-burning'
        },
        {
            id: 905,
            title: 'Young Goodman Brown',
            author: 'Nathaniel Hawthorne',
            type: 'short story',
            goodreadsUrl: 'https://www.goodreads.com/book/show/562471.Young_Goodman_Brown'
        },
        {
            id: 902,
            title: 'The Judgment',
            author: 'Franz Kafka',
            type: 'short story',
            goodreadsUrl: 'https://www.goodreads.com/book/show/16244632-the-judgment'
        },
        {
            id: 903,
            title: 'Recitatif',
            author: 'Toni Morrison',
            type: 'short story',
            goodreadsUrl: 'https://www.goodreads.com/en/book/show/34842610-recitatif'
        }
    ];

    favYouTubeChannels: IYouTubeFavorite[] = [
        {
            id: 2501,
            channelName: 'Babish Culinary Universe',
            youtuberHandle: '',
            channelSite: 'https://www.bingingwithbabish.com/',
            channelUrl: 'https://www.youtube.com/channel/UCJHA_jMfCvEnv-3kRjTCQXw'
        },
        {
            id: 2502,
            channelName: 'CGP Grey',
            youtuberHandle: 'CGPGrey',
            channelSite: 'https://www.cgpgrey.com/',
            channelUrl: 'https://www.youtube.com/user/cgpgrey'
        },
        {
            id: 2503,
            channelName: 'Dreamy',
            channelUrl: 'https://www.youtube.com/channel/UCYVyQv2rUtCMxJAFSuOSpmg/about'
        },
        {
            id: 2504,
            channelName: 'Global Cycling Network',
            youtuberHandle: 'globalcyclingnetwork',
            channelUrl: 'https://www.youtube.com/user/globalcyclingnetwork'
        },
        {
            id: 2505,
            channelName: 'Global Triathlon Network',
            youtuberHandle: 'globaltrinetwork',
            channelUrl: 'https://www.youtube.com/user/globaltrinetwork'
        }
    ];

    getFavoriteDevSites(): ISiteFavorite[] {
        return this.favDevSites;
    }

    getFavoriteShortStories(): IFictionFavorite[] {
        return this.favShortStories;
    }

    getFictionFavoriteById(id: number): IFictionFavorite | null {
        let result: IFictionFavorite | null = this.favShortStories
            .filter(sh => sh.id === id)
            .shift() || null;
        return result;
    }

    getFavoriteYouTubeChannels(): IYouTubeFavorite[] {
        return this.favYouTubeChannels;
    }
}
