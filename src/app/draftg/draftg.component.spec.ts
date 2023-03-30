import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftgComponent } from './draftg.component';

describe('DraftgComponent', () => {
  let component: DraftgComponent;
  let fixture: ComponentFixture<DraftgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraftgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
