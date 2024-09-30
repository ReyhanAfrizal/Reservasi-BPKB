import { IAddress, IAddressChild } from './i-address';

export interface ICustomer {
    id: number;
    name: string;
    email: string;
    address: IAddressChild;
    status: string;
}
