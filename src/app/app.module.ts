import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {SliderComponent} from './components/slider/slider.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {FormsModule} from '@angular/forms';
import {MovieComponent} from './components/movie/movie.component';
import {SearchSliderComponent} from './components/search-slider/search-slider.component';
import {MainComponent} from './components/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    MovieComponent,
    SearchSliderComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatBadgeModule,
    SlickCarouselModule,
    FormsModule,
  ],
  providers: [MovieComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
