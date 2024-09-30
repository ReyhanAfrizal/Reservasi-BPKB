import { IVariant } from '../interfaces/i-variant';

export class Variant implements IVariant {
  key: string = '';
  value: string | number = '';
  picture: string = '';
}
