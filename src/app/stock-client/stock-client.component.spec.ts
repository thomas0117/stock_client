import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockClientComponent } from './stock-client.component';

describe('StockClientComponent', () => {
  let component: StockClientComponent;
  let fixture: ComponentFixture<StockClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
