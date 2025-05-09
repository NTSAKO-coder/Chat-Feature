import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenderChatComponent } from './lender-chat.component';

describe('LenderChatComponent', () => {
  let component: LenderChatComponent;
  let fixture: ComponentFixture<LenderChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LenderChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LenderChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
