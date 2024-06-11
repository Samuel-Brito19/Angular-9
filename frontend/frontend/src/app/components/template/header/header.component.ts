import { Component, OnInit } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar'
import { HeaderService } from './header.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbar],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  constructor(private headerService: HeaderService) {}
  ngOnInit(): void {
    
  }

  get title():string {
    return this.headerService.headerData.title
  }

  get icon():string {
    return this.headerService.headerData.title
  }

  get routeURL():string {
    return this.headerService.headerData.title
  }
}
