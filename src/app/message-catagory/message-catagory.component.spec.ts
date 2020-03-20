import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageCatagoryComponent } from './message-catagory.component';

describe('MessageCatagoryComponent', () => {
  let component: MessageCatagoryComponent;
  let fixture: ComponentFixture<MessageCatagoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageCatagoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
