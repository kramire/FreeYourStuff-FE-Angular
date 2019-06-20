import { Component, OnInit } from '@angular/core';
import { Gift } from '../../Gift';
import { ApiClientStuffService } from '../../services/api-client-stuff.service';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.css']
})
export class MapContainerComponent implements OnInit {

  gifts: Gift[];

  constructor(private api: ApiClientStuffService) { }

  ngOnInit() {
    this.getGiftsFromApi();
  }

  getGiftsFromApi(): void {
    this.api.getStuff().subscribe(gifts => {
      this.gifts = gifts;
    });
  }

}
