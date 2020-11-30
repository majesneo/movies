import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './components/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { MovieComponent } from './components/movie/movie.component';
import { SearchSliderComponent } from './components/search-slider/search-slider.component';
import { MainComponent } from './components/main/main.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AngularMaterialModule } from './material.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';





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
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    AngularMaterialModule,
    MatButtonToggleModule,
    MatMenuModule,
    FormsModule,
  ],
  providers: [MovieComponent, MainComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
