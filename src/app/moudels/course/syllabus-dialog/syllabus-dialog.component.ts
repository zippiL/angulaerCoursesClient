// syllabus-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-syllabus-dialog',
  templateUrl: './syllabus-dialog.component.html',
  styleUrls: ['./syllabus-dialog.component.scss']
})
export class SyllabusDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  get syllabusArray() {
    return this.data.syllabus;
  }
}
