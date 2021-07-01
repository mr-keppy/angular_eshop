import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Product } from '../products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  items: Product[] = [];

  constructor(
    private http: HttpClient
  ) {}
  
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
  
  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  getItem(id: number) {
    return this.items.find(product => product.id === id);;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
