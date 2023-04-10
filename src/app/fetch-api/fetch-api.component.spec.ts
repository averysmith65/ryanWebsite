import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchAPIComponent } from './fetch-api.component';

describe('FetchAPIComponent', () => {
  let component: FetchAPIComponent;
  let fixture: ComponentFixture<FetchAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
