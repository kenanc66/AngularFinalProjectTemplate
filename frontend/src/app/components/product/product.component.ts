import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded = false;
  filterText="";
  
  constructor(private productService:ProductService, 
    private activatedRoute:ActivatedRoute, 
    private toastrService:ToastrService,
    private cartService:CartService) {}

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params=>{
        if(params["categoryId"]){
          this.getProductsByCategory(params["categoryId"])
        }else{
          this.getProducts()
        }
      })
  }

  getProducts() {
    this.productService.getProducts().subscribe(response=>{
      this.products = response.data
      this.dataLoaded = true;
    })   
  }

  getProductsByCategory(categoryId:number) {
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
      this.products = response.data
      this.dataLoaded = true;
    })   
  }

  addToCart(product:Product){
      if(product.unitsInStock<1){
        this.toastrService.error("Warning","Lack of Stock")
      }else{
        this.toastrService.success(product.productName,"Product added.")
        this.cartService.addToCart(product);
      }
   
  }
}