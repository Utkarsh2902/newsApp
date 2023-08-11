import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastnewsComponent } from './pastnews.component';

describe('PastnewsComponent', () => {
  let component: PastnewsComponent;
  let fixture: ComponentFixture<PastnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastnewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
