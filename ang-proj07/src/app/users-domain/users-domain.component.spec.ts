import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDomainComponent } from './users-domain.component';

describe('UsersDomainComponent', () => {
  let component: UsersDomainComponent;
  let fixture: ComponentFixture<UsersDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersDomainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
