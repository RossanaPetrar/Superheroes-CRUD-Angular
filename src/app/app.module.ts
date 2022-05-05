import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { GetHeroesButtonComponent } from './components/get-heroes-button/get-heroes-button.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { AddHeroComponent } from './components/add-hero/add-hero.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroModalComponent } from './components/hero-modal/hero-modal.component';

const appRoutes: Routes = [{ path: '', component: HeroesListComponent }];

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    GetHeroesButtonComponent,
    HeroCardComponent,
    AddHeroComponent,
    HeaderComponent,
    HeroModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
