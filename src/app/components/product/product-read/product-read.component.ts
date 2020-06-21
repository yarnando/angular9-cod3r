import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }

  deleteProduct(product: Product): void {
    let productId = `${product.id}`
    this.productService.delete(productId).subscribe(() => {
      this.products = this.products.filter( productItem => productItem != product )
      this.productService.showMessage(`Produto ${product.name} deletado!`)
    })
  }  

}
