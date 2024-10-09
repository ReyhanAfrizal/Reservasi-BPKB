import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { debounce } from 'rxjs';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrl: './product-items.component.css',
})
export class ProductItemsComponent implements OnInit, OnDestroy {
  id: number = 0;
  product?: Product;
  sub: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id') || '0');
    // this.product = this.productService.getProduct(this.id);

    this.sub = this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get('slug') || '0');
      this.product = this.productService.getProduct(this.id);
    });
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();

    console.log('UNSUBSCRIBE....');
  }
}
