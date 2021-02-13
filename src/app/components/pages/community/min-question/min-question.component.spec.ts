import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinQuestionComponent } from './min-question.component';

describe('MinQuestionComponent', () => {
  let component: MinQuestionComponent;
  let fixture: ComponentFixture<MinQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
