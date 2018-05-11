import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDesignComponent } from './product-design.component';

describe('ProductDesignComponent', () => {
  let component: ProductDesignComponent;
  let fixture: ComponentFixture<ProductDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
