import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent implements OnInit {

  constructor (private productService: ProductService) {}

  ngOnInit(): void {

  }

  createProduct(): void {
    this.productService.showMessage('Operação executada com sucesso')
  }
}
