import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleAppComponent } from './sample-app.component';

describe('SampleAppComponent', () => {
  let component: SampleAppComponent;
  let fixture: ComponentFixture<SampleAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
