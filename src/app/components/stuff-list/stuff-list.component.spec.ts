import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StuffListComponent } from './stuff-list.component';


@Component({selector: 'app-stuff-list-item', template: ''})
class StuffListItemComponent {}

describe('StuffListComponent', () => {
  let component: StuffListComponent;
  let fixture: ComponentFixture<StuffListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuffListComponent, StuffListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuffListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
