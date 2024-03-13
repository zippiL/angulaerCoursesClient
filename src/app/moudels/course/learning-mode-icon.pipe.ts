import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Pipe({
  name: 'learningModeIcon'
})
export class LearningModeIconPipe implements PipeTransform {

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) { }

  transform(value: number): any {
    let iconName: string;
    switch (value) {
      case 1:
        iconName = 'computer'; // Icon for Zoom
        break;
      case 2:
        iconName = 'apartment'; // Icon for Frontal
        break;
      default:
        return '';
    }

    this.iconRegistry.addSvgIcon(
      iconName,
      this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${iconName}.svg`)
    );

    return iconName;
  }

}
