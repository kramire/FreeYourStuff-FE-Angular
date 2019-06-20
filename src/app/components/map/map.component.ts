import { Component, OnInit, Input } from '@angular/core';
import { Gift } from '../../Gift';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  title: string = 'my first AGM project';
  lat: number = 41.394703;
  lng: number = 2.200816;

  @Input() gifts: Gift[]

  constructor() { }

  ngOnInit() {
  }

}
