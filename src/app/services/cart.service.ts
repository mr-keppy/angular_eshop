import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Product } from '../products';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  private subject = new Subject<any>();
  constructor(private http: HttpClient) {}

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }

  addToCart(product: Product) {
    this.items.push(product);
  }

  updateCart(product: Product) {
    const itemIndex = this.items.findIndex((item) => item.id == product.id);
    this.items[itemIndex].quantity = product.quantity;
  }

  getItems() {
    return this.items;
  }

  getItem(id: number) {
    return this.items.find((product) => product.id === id);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  sendMessage(message: string) {
    this.subject.next({ text: message });
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
