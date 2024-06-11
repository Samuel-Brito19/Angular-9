import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'
import { Router } from '@angular/router';


import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt)



@Component({
  selector: 'app-product-read',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css',
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }]
})
export class ProductReadComponent implements OnInit{
  products!: Product[];
  displayedColumns = ['id', 'name', 'price', 'action']
  
  constructor (private productService: ProductService, private router:Router) {
  }
  
  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }

  navigateToUpdate() {
    this.router.navigate(['products/update/{{row.id}}'])
  }
}
