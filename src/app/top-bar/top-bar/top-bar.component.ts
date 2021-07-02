import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  cartItemCount!: number | 0;
  items = this.cartService.getItems();
  constructor(private cartService: CartService) {
    this.subscription = this.cartService.getMessage().subscribe(itemCount => {
       this.cartItemCount = Number(itemCount.text); });
   }
   ngOnInit(): void {
    this.cartItemCount = 0;
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}
}
