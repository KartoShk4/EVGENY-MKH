import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'tagColor'
})
export class TagColorPipe implements PipeTransform {
  transform(value: string): string {
    switch (value.toLowerCase()) {
      case 'html':
        return '#e34c26';   // красный
      case 'css':
        return '#f0db4f';    // желтый
      case 'javascript':
      case 'js':
        return '#f7df1e';     // жёлтый
      case 'typescript':
      case 'ts':
        return '#3178c6';     // синий
      case 'angular':
        return '#dd0031';// красный
      case 'react':
        return '#61dafb';  // голубой
      case 'node':
        return '#68a063';   // зелёный
      default:
        return '#ccc';          // серый по умолчанию
    }
  }
}
