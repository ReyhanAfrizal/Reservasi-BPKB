import { IVariant } from './i-variant';

export interface IProduct {
  title: string;
  description: string;
  price: number;
  stock: number;
  variants: IVariant[];
}

export interface ISimpleProduct {
  title: string;
  description: string;
  price: number;
  stock: number;
}

