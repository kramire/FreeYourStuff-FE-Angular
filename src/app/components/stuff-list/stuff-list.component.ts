import { Component, OnInit, Input } from '@angular/core';
import { Gift } from '../../Gift';

@Component({
  selector: 'app-stuff-list',
  templateUrl: './stuff-list.component.html',
  styleUrls: ['./stuff-list.component.css']
})
export class StuffListComponent implements OnInit {

  @Input() gifts:Gift[];

  constructor() { }

  ngOnInit() {
  }

}
