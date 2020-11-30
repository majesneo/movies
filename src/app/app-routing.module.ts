import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovieComponent} from './components/movie/movie.component';
import {SearchSliderComponent} from './components/search-slider/search-slider.component';
import {AppComponent} from './app.component';


const routes: Routes = [

  {
    path: 'movie/:id',
    component: MovieComponent

  },
  {
    path: 'search',
    component: SearchSliderComponent

  },
  {
    path: '**', redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
