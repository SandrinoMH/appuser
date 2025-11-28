import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carduser } from './carduser';

describe('Carduser', () => {
  let component: Carduser;
  let fixture: ComponentFixture<Carduser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carduser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carduser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
