// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
// import { StuffListContainerComponent } from './stuff-list-container.component';
// import { HttpClientModule } from '@angular/common/http';
// import { ApiClientStuffService } from '../../services/api-client-stuff.service';
// import { Observable} from 'rxjs';
// import { of } from 'rxjs';
// import { Gift } from '../../Gift';

// @Component({selector: 'app-stuff-list', template: ''})
// class StuffListComponent {}

// @Component({selector: 'app-stuff-list-item', template: ''})
// class StuffListIitemComponent {}


// describe('StuffListContainerComponent', () => {
//   let component: StuffListContainerComponent;
//   let fixture: ComponentFixture<StuffListContainerComponent>;

//   const dummyStuffs = [
//     {
//       time: Date.now(),
//       picture: 'cake',
//       location : {
//         "lat": 41.4075438,
//         "lng": 2.1798414999999998
//       },
//       address: 'somewhere',
//       tags: ['awesome', 'chocolate'],
//       updated: 0
//     }
//   ];

//   let dummyApiClientStuffService = {
//     getStuff: () => {
//       return of(dummyStuffs);
//     }
//   };

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientModule],
//       declarations: [ StuffListContainerComponent, StuffListComponent, StuffListIitemComponent ],
//       providers: [{provide: ApiClientStuffService, useValue: dummyApiClientStuffService}]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(StuffListContainerComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
