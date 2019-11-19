import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TruncatePipe } from './pipeline/string.truncate.pipe';


//Routes
import { AppRoutingModule } from './app-routing.module';

//Services

import { heroesServices } from './services/heroes.services';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    heroesServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
