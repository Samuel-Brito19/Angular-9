import { Component, NgModule, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {MatButtonModule} from '@angular/material/button'
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormsModule } from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { MatCardModule } from  '@angular/material/card';
import { Product } from '../product.model';
@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [MatButtonModule, FormsModule,MatFormFieldModule, MatInputModule,MatCardModule],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})

export class ProductUpdateComponent implements OnInit{
  
  product!: Product;
  
  constructor(private productService: ProductService, private router:Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') || ''
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  updateProduct():void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Product updated sucessfully :)")
      this.router.navigate(['/products'])
    })
  
  }

  cancel():void {
    this.router.navigate(['/products'])
  }
 
}
