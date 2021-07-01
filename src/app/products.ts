export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    stock: number;
  }
  
  export const products = [
    {
      id: 1,
      name: 'iPhone 11 Pro',
      price: 399,
      description: 'A large phone with best screen',
      image: './assets/img/iphone11.png',
      stock: 10
    },
    {
      id: 2,
      name: 'iPhone 12 Mini',
      price: 699,
      description: 'A great phone with camera',
      image: './assets/img/iphone-12-mini.png',
      stock: 8
    },
    {
      id: 3,
      name: 'iPhone 13',
      price: 799,
      description: 'New phone yet to release',
      image: './assets/img/iphone-12.jpg',
      stock: 0
    },
    {
        id: 4,
        name: 'iPhone SE',
        price: 199,
        description: '',
        image: './assets/img/iphone-se.png',
        stock: 1
      }
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */