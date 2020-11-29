import {Component, Input, OnInit} from '@angular/core';
import {Movies} from '../../models/movies';

@Component({
  selector: 'app-search-slider',
  templateUrl: './search-slider.component.html',
  styleUrls: ['./search-slider.component.sass']
})
export class SearchSliderComponent implements OnInit {

  // @ts-ignore
  @Input() searchRes: any;
  @Input() title:any;
  @Input() sliderConfig: any;
  // @ts-ignore
  @Input() movies: any;


  constructor() {
    // @ts-ignore
    console.log(this.searchRes);
    console.log(123);
  }

  ngOnInit(): void {
  }

}
