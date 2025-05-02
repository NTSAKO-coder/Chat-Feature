import { Component } from '@angular/core';
import { ProductSearchComponent } from './components/product-search/product-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductSearchComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
