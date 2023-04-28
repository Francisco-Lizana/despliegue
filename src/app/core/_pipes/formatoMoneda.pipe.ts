import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({name: 'formatoCosto'})
export class FormatoCostoPipe implements PipeTransform {
  constructor(private decimalPipe: DecimalPipe) {}

  transform(value: number): string {
    const costoFormateado = this.decimalPipe.transform(value, '1.0-0');
    return costoFormateado!.replace(',', '.');
  }
}
