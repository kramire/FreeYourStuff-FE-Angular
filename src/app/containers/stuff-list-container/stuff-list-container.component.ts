import { Component, OnInit } from '@angular/core';
import { Gift } from '../../Gift';
import { ApiClientStuffService } from '../../services/api-client-stuff.service';

@Component({
  selector: 'app-stuff-list-container',
  templateUrl: './stuff-list-container.component.html',
  styleUrls: ['./stuff-list-container.component.css']
})
export class StuffListContainerComponent implements OnInit {
  gifts:Gift[];

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
