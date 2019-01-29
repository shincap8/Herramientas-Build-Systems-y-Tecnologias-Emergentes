import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datafilter'
})

export class DatafilterPipe implements PipeTransform {
  transform(catalogo: any[], buscar: string): any {
    if (!catalogo) {
      return [];
    }
    if (!buscar) {
      return catalogo;
    }
    return catalogo.filter(item => item.nombre.toLowerCase().indexOf(buscar.toLowerCase()) !== -1);
  };
}