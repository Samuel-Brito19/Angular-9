import { Component, NgModule, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {MatButtonModule} from '@angular/material/button'
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product.model';
import {FormsModule } from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { MatCardModule } from  '@angular/material/card';
@Component({
  selector: 'app-product-delete',
  standalone: true,
  imports: [MatButtonModule, FormsModule,MatFormFieldModule, MatInputModule,MatCardModule],
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})
export class ProductDeleteComponent {

  product!: Product
 
  constructor (private productService: ProductService, private router:Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }
  
  deleteProduct():void {
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage('Operação executada com sucesso')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {

    this.router.navigate(['/products'])
  }
}
