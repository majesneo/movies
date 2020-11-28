import {Component, Input, OnInit} from '@angular/core';
import {Movies} from '../../models/movies';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass']
})
export class SliderComponent implements OnInit {
  // @ts-ignore
  @Input() sliderConfig;
  // @ts-ignore
  @Input() movies: Movies;
  // @ts-ignore
  @Input() title: string;


  constructor() {
  }

  ngOnInit(): void {
  }

}
