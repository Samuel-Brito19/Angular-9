import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'
import { HomeComponent } from '../../../views/home/home.component';
import { ProductCrudComponent } from '../../../views/product-crud/product-crud.component';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, HomeComponent,ProductCrudComponent, RouterOutlet],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {

  constructor(private router: Router) {

  }

  navigateToProducts(): void {
    this.router.navigate(['products'])
  }

  navigateToHome(): void {
    this.router.navigate([''])
  }
}
