import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  
}
