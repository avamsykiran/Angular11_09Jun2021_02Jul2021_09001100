import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxnsDomainComponent } from './txns-domain.component';

describe('TxnsDomainComponent', () => {
  let component: TxnsDomainComponent;
  let fixture: ComponentFixture<TxnsDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxnsDomainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxnsDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
