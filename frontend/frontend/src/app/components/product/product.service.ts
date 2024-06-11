import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Product } from './product.model';
import { Observable, EMPTY, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseURL = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError:boolean = false):void {
    this.snackBar.open(msg, 'undo', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass:  isError ? ["msg-error"] : ["msg-success"]
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseURL}/${id}`
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseURL}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: string): Observable<Product> {
    const url = `${this.baseURL}/${id}`
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
