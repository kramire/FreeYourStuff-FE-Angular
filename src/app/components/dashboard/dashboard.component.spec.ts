import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable} from 'rxjs';
import { of } from 'rxjs';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiClientStuffService } from '../../services/api-client-stuff.service';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

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
    },
    {
      time: Date.now(),
      picture: 'leka',
      location : {
        "lat": 41.4075438,
        "lng": 2.1798414999999998
      },
      address: 'poblenou',
      tags: ['awesome', 'niiiiiiiiiice'],
      updated: 1
    }
  ];

  let dummyApiClientStuffService = {
    getStuff: () => {
      return of(dummyStuffs);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ DashboardComponent],
      providers: [{provide: ApiClientStuffService, useValue: dummyApiClientStuffService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
