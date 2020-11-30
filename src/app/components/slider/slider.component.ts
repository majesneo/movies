import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass']
})
export class SliderComponent implements OnInit {

  @Input() sliderConfig;

  @Input() movies: any;

  @Input() title: string;


  constructor() {
  }

  ngOnInit(): void {
  }

}
