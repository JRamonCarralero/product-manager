import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersView } from './orders-view';

describe('OrdersView', () => {
  let component: OrdersView;
  let fixture: ComponentFixture<OrdersView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
