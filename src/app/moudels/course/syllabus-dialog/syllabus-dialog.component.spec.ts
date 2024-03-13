import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusDialogComponent } from './syllabus-dialog.component';

describe('SyllabusDialogComponent', () => {
  let component: SyllabusDialogComponent;
  let fixture: ComponentFixture<SyllabusDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SyllabusDialogComponent]
    });
    fixture = TestBed.createComponent(SyllabusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
