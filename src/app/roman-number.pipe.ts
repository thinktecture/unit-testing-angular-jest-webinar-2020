import { Pipe, PipeTransform } from '@angular/core';
import { RomanNumberService } from './roman-number.service';

@Pipe({
  name: 'romanNumber'
})
export class RomanNumberPipe implements PipeTransform {
  constructor(private readonly romanNumberService: RomanNumberService) {
  }

  transform(value: unknown, ...args: unknown[]): unknown {
    return this.romanNumberService.transform(value as any);
  }
}
