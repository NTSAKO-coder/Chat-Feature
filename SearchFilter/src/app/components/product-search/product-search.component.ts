import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.service';

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss'
})
export class ProductSearchComponent {
  name = '';
  location = '';
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  search() {
    this.productService.searchProducts(this.name, this.location)
      .subscribe(data => this.products = data);
  }
}
