import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-search-slider',
  templateUrl: './search-slider.component.html',
  styleUrls: ['./search-slider.component.sass']
})
export class SearchSliderComponent implements OnInit {

  // @ts-ignore
  @Input() searchRes: Movies[] = [];
  @Input() title: string;
  @Input() sliderConfig: any;

  @Input() movies: string;

  constructor(public addFavorites: MainComponent, public delFavorites: MainComponent) {
  }

  ngOnInit(): void {
  }

}
