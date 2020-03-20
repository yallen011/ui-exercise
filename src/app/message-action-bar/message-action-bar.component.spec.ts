import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageActionBarComponent } from './message-action-bar.component';

describe('MessageActionBarComponent', () => {
  let component: MessageActionBarComponent;
  let fixture: ComponentFixture<MessageActionBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageActionBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
