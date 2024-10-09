import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ISimpleProduct } from './features/products/interfaces/i-product';
import { UserService } from './cores/services/user.service';
import { IUser } from './cores/interfaces/i-user';
import { ICustomer } from './cores/interfaces/i-customer';
import { trigger, transition, style, animate } from '@angular/animations';
import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { timeout } from 'rxjs';

interface ICategory {
  id: number;
  name: string;
}
interface IProduct {
  id: number;
  title: string;
  stock: number;
  price: number;
  categories?: ICategory[];
}

class MyStyle {
  color: string = 'green';
  'font-size.px': number = 32;
  'font-weight': string = 'bolder';
}

class Hobi {
  id: number = 0;
  name: string = '';

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const MOCK_DATA = {
  address: { city: 'Jakarta', zipCode: '40614', street: 'Jakarta' },
  email: 'reyhanafri@mail',
  gender: 'pria',
  hobi: 1,
  menikah: true,
  username: 'reyhanafri',
};

const VALIDATORS = {
  inisialValid: [Validators.required, Validators.maxLength(15)],
  genValid: [Validators.required],
  hobiValid: [Validators.required],
  alamat: {
    kotaValid: [
      Validators.required,
      Validators.maxLength(15),
      Validators.minLength(4),
    ],
    jalanValid: [
      Validators.required,
      Validators.maxLength(100),
      Validators.minLength(10),
    ],
    kodeposValid: [
      Validators.required,
      Validators.maxLength('11620'.length),
      Validators.minLength('11620'.length),
    ],
  },
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  users: IUser[] = [];
  customer: ICustomer[] = [];

  formF2: FormGroup = new FormGroup({
    price: new FormControl(0),
    diskon: new FormControl(0),
  });

  ppn: number = 0.11;
  hargaAfterPPN: number = 0;
  diskonData: number = 0;
  sisa: number = 0;

  // formRF: FormGroup;

  // constructor(private formBuilder: FormBuilder) {
  //   this.formRF = this.formBuilder.group({
  //     inisial: new FormControl['', VALIDATORS.inisialValid],
  //     nikah: new FormControl[false],
  //     gen: new FormControl['', VALIDATORS.genValid],
  //     hobi: new FormControl[0, VALIDATORS.hobiValid],
  //     alamat: new FormGroup({
  //       kota: new FormControl['', VALIDATORS.alamat.kotaValid],
  //       jalan: new FormControl['', VALIDATORS.alamat.jalanValid],
  //       kodepos: new FormControl['', VALIDATORS.alamat.kodeposValid],
  //     }),
  //   });
  // }

  formRF: FormGroup = new FormGroup({
    inisial: new FormControl('', VALIDATORS.inisialValid),
    nikah: new FormControl(),
    harga: new FormControl(0),
    diskon: new FormControl(0),
    grandtotal: new FormControl(0),
    bayar: new FormControl(0),
    kembalian: new FormControl(0),
    gen: new FormControl('', VALIDATORS.genValid),
    hobi: new FormControl(0, VALIDATORS.hobiValid),
    alamat: new FormGroup({
      kota: new FormControl('', VALIDATORS.alamat.kotaValid),
      jalan: new FormControl('', VALIDATORS.alamat.jalanValid),
      kodepos: new FormControl('', VALIDATORS.alamat.kodeposValid),
    }),
  });

  listOfHobi: Hobi[] = [
    new Hobi(1, 'Memasak'),
    new Hobi(2, 'Mancing'),
    new Hobi(3, 'Membaca'),
  ];

  account: {
    username: string;
    email: string;
  } = { username: '', email: '' };
  onSubmit() {
    console.log('Hello Form');
    this.account = this.form.value;
    console.log(this.form.value);
  }

  onSubmitFR() {
    if (this.form.valid) {
      console.log(this.formRF.value);
    }
  }

  onDefault() {
    this.form.setValue(MOCK_DATA);
  }

  onChangeHobi() {
    this.form.controls['hobi'].setValue(3);
  }

  onPatching() {
    let obj = {
      menikah: true,
      gender: 'wanita',
    };
    this.form.control.patchValue(obj);
  }

  onChangeAddress() {
    let obj = {
      city: 'Jakarta Barat',
    };

    let formGroup = this.form.controls['address'] as FormGroup;
    formGroup.patchValue(obj);
  }

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // this.userService.all().subscribe((resp: IUser[]) => {
    //   this.users = resp;
    // });
    // setTimeout(() => {
    //   this.form.setValue(MOCK_DATA);
    // }, 500);
    // this.formRF.get('name')?.statusChanges.subscribe((status: string) => {
    //   console.log('Listen status name field: ', status);
    // });
    // this.formRF.get('hobi')?.valueChanges.subscribe((value: number) => {
    //   console.log('Listen value hobi field: ', value);
    // });
    // this.formRF.get('diskon')?.valueChanges.subscribe((value: number) => {
    //   let diskonisi = value;
    //   this.diskonData = diskonisi;
    // });
    // this.formRF.get('harga')?.valueChanges.subscribe((value: number) => {
    //   let hargaSetelahDiskon = value * this.diskonData;
    //   let hargadiskon = value - hargaSetelahDiskon;
    //   let hargaPPN = this.ppn * hargadiskon;
    //   this.hargaAfterPPN = hargaPPN + hargadiskon;
    // });
    // this.formRF.get('bayar')?.valueChanges.subscribe((value: number) => {
    //   let kembali = Math.abs(value - this.hargaAfterPPN);
    //   this.sisa = kembali;
    // });
  }

  //
  product: ISimpleProduct = {
    title: 'Contoh Product 01',
    description: 'Lorem ipsum',
    price: 34000,
    stock: 20,
  };
  counter: number = 10;

  handler(data: number) {
    this.counter = data;
  }

  fontSize: number = 16;
  isActive: boolean = false;

  myObjectClass = {
    backgroundColor: 'cyan',
    'fontSize.px': 50,
  };

  myStyleClass: MyStyle = new MyStyle();

  onChangeColor() {
    this.myStyleClass.color = 'red';
  }

  show: boolean = false;

  products: IProduct[] = [
    {
      id: 1,
      title: 'Laptop',
      stock: 20,
      price: 12000000,
      categories: [
        { id: 1, name: 'Electronics' },
        { id: 2, name: 'Computers' },
      ],
    },
    {
      id: 2,
      title: 'Smartphone',
      stock: 50,
      price: 5000000,
      categories: [
        { id: 5, name: 'Electronics' },
        { id: 6, name: 'Accessories' },
      ],
    },
    {
      id: 3,
      title: 'Headphones',
      stock: 30,
      price: 300000,
      categories: [
        { id: 5, name: 'Electronics' },
        { id: 6, name: 'Accessories' },
      ],
    },
    {
      id: 4,
      title: 'TV',
      stock: 15,
      price: 8000000,
      categories: [
        { id: 7, name: 'Electronics' },
        { id: 8, name: 'Home Appliances' },
      ],
    },
    {
      id: 5,
      title: 'Blender',
      stock: 25,
      price: 500000,
      categories: [
        { id: 9, name: 'Kitchen Appliances' },
        { id: 10, name: 'Home Appliances' },
      ],
    },
    {
      id: 6,
      title: 'Keyboard',
      stock: 40,
      price: 300000,
      categories: [
        { id: 11, name: 'Computers' },
        { id: 12, name: 'Accessories' },
      ],
    },
    {
      id: 7,
      title: 'Gaming Chair',
      stock: 10,
      price: 2500000,
      categories: [
        { id: 13, name: 'Furniture' },
        { id: 14, name: 'Gaming' },
      ],
    },
    {
      id: 8,
      title: 'Smartwatch',
      stock: 60,
      price: 1500000,
      categories: [
        { id: 15, name: 'Electronics' },
        { id: 16, name: 'Wearables' },
      ],
    },
    {
      id: 9,
      title: 'Refrigerator',
      stock: 5,
      price: 12000000,
      categories: [
        { id: 17, name: 'Home Appliances' },
        { id: 18, name: 'Kitchen Appliances' },
      ],
    },
    {
      id: 10,
      title: 'Tablet',
      stock: 35,
      price: 4000000,
      categories: [
        { id: 19, name: 'Electronics' },
        { id: 20, name: 'Computers' },
      ],
    },
  ];
}

// import { Component } from '@angular/core';

// interface ICategory {
//   id: number;
//   name: string;
// }

// interface IProducr {
//   id: number;
//   title: string;
//   price: number;
//   category: ICategory;
// }

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
// })
// export class AppComponent {
//   product: IProducr = {
//     id: 1,
//     title: 'Baju Jersey',
//     price: 123000,
//     category: {
//       id: 3,
//       name: 'Baju Olahraga',
//     },
//   };

//   url: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s";
//   kucing: string ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s";

//   nama: string = "";

//   onChangeimage(strurl : string){
//     this.url=strurl;
//   }

//   // count: number = 0;
//   // up() {
//   //   this.count++;
//   // }
//   // down() {
//   //   this.count--;
//   // }
//   // handler(value: number) {
//   //   this.count = value;
//   // }

// }

// import { Component } from '@angular/core';
// import { ISimpleProduct } from './features/products/interfaces/i-product';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
// })
// export class AppComponent {
//   product: ISimpleProduct = {
//     title: 'Ini dia hasilnya',
//     description: 'Lorem ipsum',
//     price: 34000,
//     stock: 20,
//   };
//   counter: number = 10;
//   handler(data: number) {
//     this.counter = data;
//   }
// }
