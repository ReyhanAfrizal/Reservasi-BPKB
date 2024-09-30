import { IGeo } from './i-geo';

export interface IAddress {
  street: string;
  suite?: string;
  city: string;
  zipcode?: string;
  geo?: IGeo;
}

export interface IAddressChild extends IAddress {
  zip: string;
}