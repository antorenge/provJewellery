import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanProductionComponent } from './artisan-production.component';

describe('ArtisanProductionComponent', () => {
  let component: ArtisanProductionComponent;
  let fixture: ComponentFixture<ArtisanProductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtisanProductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisanProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
