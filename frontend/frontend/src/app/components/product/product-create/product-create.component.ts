import { Component, NgModule, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {MatButtonModule} from '@angular/material/button'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product.model';
import {FormsModule } from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { MatCardModule } from  '@angular/material/card';
@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [MatButtonModule, FormsModule,MatFormFieldModule, MatInputModule,MatCardModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css',
  providers: [HttpClient]
})

export class ProductCreateComponent implements OnInit {

  
  product: Product = {
    name: '',
    price: 0
    }

  constructor (private productService: ProductService, private router:Router) {}

  ngOnInit(): void {

  }

  createProduct(): void {

  this.productService.create(this.product).subscribe(() => {
    this.productService.showMessage('Operação executada com sucesso')
    this.router.navigate(['/products'])

  }) 

  }
    
  cancel(): void {

    this.router.navigate(['/products'])
  }
}
