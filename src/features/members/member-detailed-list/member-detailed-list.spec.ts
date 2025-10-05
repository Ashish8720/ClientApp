import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDetailedList } from './member-detailed-list';

describe('MemberDetailedList', () => {
  let component: MemberDetailedList;
  let fixture: ComponentFixture<MemberDetailedList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberDetailedList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberDetailedList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
