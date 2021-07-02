import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from 'src/app/products';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  addToCart(product: Product, quantity: string) {
    product.quantity = Number(quantity);
    const existingItem = this.cartService.getItem(product.id);
    if (existingItem) {
      console.log(product.quantity);
      this.cartService.updateCart(product);
      window.alert('Your product has been updated to the cart!');
    } else {
      this.cartService.addToCart(product);
      window.alert('Your product has been added to the cart!');
    }
    this.cartService.sendMessage(String(this.cartService.getItems().length));
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
