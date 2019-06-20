import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MapContainerComponent } from './map-container.component';

import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiClientStuffService } from '../../services/api-client-stuff.service';
import { Observable} from 'rxjs';
import { of } from 'rxjs';
import { Gift } from '../../Gift';

describe('MapContainerComponent', () => {
  let component: MapContainerComponent;
  let fixture: ComponentFixture<MapContainerComponent>;

  const dummyStuffs = [
    {
      time: Date.now(),
      picture: 'cake',
      location : {
        "lat": 41.4075438,
        "lng": 2.1798414999999998
      },
      address: 'somewhere',
      tags: ['awesome', 'chocolate'],
      updated: 0
    }
  ];

  let dummyApiClientStuffService = {
    getStuff: () => {
      return of(dummyStuffs);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ MapContainerComponent ],
      providers: [ {provide: ApiClientStuffService, useValue: dummyApiClientStuffService} ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
