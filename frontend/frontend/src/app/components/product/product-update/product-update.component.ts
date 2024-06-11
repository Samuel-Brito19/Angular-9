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
  selector: 'app-product-update',
  standalone: true,
  imports: [MatButtonModule, FormsModule,MatFormFieldModule, MatInputModule,MatCardModule],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})

export class ProductUpdateComponent {

}
