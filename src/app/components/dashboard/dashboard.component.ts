import { Component, OnInit } from '@angular/core';
import { Gift } from '../../Gift';
import { ApiClientStuffService } from '../../services/api-client-stuff.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  gifts:Gift[];

  constructor(private api: ApiClientStuffService) { }

  ngOnInit() {
    this.getGiftsFromApi();
  }

  getGiftsFromApi(): void {
    this.api.getStuff().subscribe(gifts => this.gifts = gifts);
  }
}
