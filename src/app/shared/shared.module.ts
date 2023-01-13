import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { E404Component } from './components/e404/e404.component';
import { E500Component } from './components/e500/e500.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { SkipNavComponent } from './components/skip-nav/skip-nav.component';

@NgModule({
	declarations: [
		E404Component,
		E500Component,
		MainNavComponent,
		SkipNavComponent,
	],
	imports: [CommonModule, RouterModule],
	exports: [
		E404Component,
		E500Component,
		FormsModule,
		MainNavComponent,
		SkipNavComponent,
	],
})
export class SharedModule {}
