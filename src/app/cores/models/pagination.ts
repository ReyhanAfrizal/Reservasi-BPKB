import { IPagination } from '../interfaces/i-pagination';

export class Pagination<T> implements IPagination<T> {
  first: number = 0;
  prev: number = 0;
  next: number = 0;
  last: number = 0;
  pages: number = 0;
  items: number = 0;
  data!: T;
}
