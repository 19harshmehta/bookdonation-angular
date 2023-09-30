import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDonationsComponent } from './list-donations.component';

describe('ListDonationsComponent', () => {
  let component: ListDonationsComponent;
  let fixture: ComponentFixture<ListDonationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDonationsComponent]
    });
    fixture = TestBed.createComponent(ListDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
