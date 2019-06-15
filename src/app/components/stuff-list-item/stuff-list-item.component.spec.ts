import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffListItemComponent } from './stuff-list-item.component';

describe('StuffListItemComponent', () => {
  let component: StuffListItemComponent;
  let fixture: ComponentFixture<StuffListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuffListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuffListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
