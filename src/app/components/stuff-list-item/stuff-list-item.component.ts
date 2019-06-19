import { Component, OnInit, Input } from '@angular/core';
import { Gift } from '../../Gift';

@Component({
  selector: 'app-stuff-list-item',
  templateUrl: './stuff-list-item.component.html',
  styleUrls: ['./stuff-list-item.component.css']
})
export class StuffListItemComponent implements OnInit {

  @Input() gift: Gift

  constructor() { }

  ngOnInit() {
  }

}
