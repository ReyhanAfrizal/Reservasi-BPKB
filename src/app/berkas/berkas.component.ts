// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-berkas',
//   templateUrl: './berkas.component.html',
//   styleUrl: './berkas.component.css'
// })
// export class BerkasComponent {
//   nama: string = 'Xiaomi Redmi Buds 6 Play';
//   harga: number = 129000;
//   created: Date = new Date();
//   pilihanWarna: string[] = ['putih', 'hitam', 'biru', 'cream'];
//   foto: string = '68c0e5fe-05e1-48f2-85af-6a942f67a358.png';

//   getPajak(persentase: number, hargaAfterDiskon: number): number {
//     return hargaAfterDiskon + this.harga * persentase;
//   }
// }

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISimpleProduct } from '../features/products/interfaces/i-product';

@Component({
  selector: 'app-berkas',
  templateUrl: './berkas.component.html',
  styleUrl: './berkas.component.css',
})
export class BerkasComponent {
  @Input() oncom!: number;
  @Input() product!: ISimpleProduct;
  @Output() emit: EventEmitter<number> = new EventEmitter();

  up() {
    this.oncom++;
    this.emit.emit(this.oncom);
  }

  down() {
    this.oncom--;
    this.emit.emit(this.oncom);
  }
}
