import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FavoritesModule } from './favorites/favorites.module';

import { AboutComponent } from './about/about.component';
import { E404Component } from './shared/components/e404/e404.component';
import { E500Component } from './shared/components/e500/e500.component';
import { HomeComponent } from './home/home.component';

const routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent },
    { path: 'About', component: AboutComponent },
    { path: '404', component: E404Component },
    { path: '500', component: E500Component },
    { path: '**', component: E404Component }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        FavoritesModule,
        SharedModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
