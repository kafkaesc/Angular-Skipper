import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { DevComponent } from './dev/dev.component';
import { ShortStoriesComponent } from './short-stories/short-stories.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { ShortStoryDetailsComponent } from './short-story-details/short-story-details.component';
import { ShortStoryLiComponent } from './short-story-li/short-story-li.component';
import { FavoritesMainComponent } from './favorites-main/favorites-main.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  {
    path: '',
    component: FavoritesMainComponent,
    children: [
      { path: 'Dev', component: DevComponent },
      { path: 'ShortStories', component: ShortStoriesComponent },
      { path: 'ShortStories/:id', component: ShortStoryDetailsComponent },
      { path: 'YouTube', component: YoutubeComponent },
    ],
  },
];

@NgModule({
  declarations: [
    DevComponent,
    ShortStoriesComponent,
    ShortStoryDetailsComponent,
    ShortStoryLiComponent,
    YoutubeComponent,
    FavoritesMainComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class FavoritesModule {}
