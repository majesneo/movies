import {Component, Input, OnInit} from '@angular/core';
import {MainComponent} from '../main/main.component';

@Component({
  selector: 'app-search-slider',
  templateUrl: './search-slider.component.html',
  styleUrls: ['./search-slider.component.sass']
})
export class SearchSliderComponent implements OnInit {

  // @ts-ignore
  @Input() searchRes: any;
  @Input() title: any;
  @Input() sliderConfig: any;

  @Input() movies: any;


  constructor(public addFavorites: MainComponent, public delFavorites: MainComponent) {
  }

  ngOnInit(): void {
  }

}
