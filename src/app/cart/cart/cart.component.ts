import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from 'src/app/products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  total!: number | 0;
  checkoutForm = this.formBuilder.group({
    name: '',
    address1: '',
    address2: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    zip: '',
  });
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.refreshTotal();
  }

  refreshTotal(): void {
    this.total = 0;

    this.items.forEach((item) => {
      this.total = this.total + item.price * item.quantity;
    });
    console.log(this.total);
  }

  onQuantityChange(item: Product, updatedQty: string): void {
    if (item.quantity != Number(updatedQty)) {
      this.total = 0;
      //remove old
      const index: number = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
      // update quantity
      item.quantity = Number(updatedQty);

      //add item again
      this.items.push(item);

      // calculate total
      this.items.forEach((item) => {
        this.total = this.total + item.price * item.quantity;
      });
      console.log(this.total);
    }
  }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  onClose(item: Product): void {
    const index: number = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.total = this.total - item.quantity * item.price;
    }
  }
}
