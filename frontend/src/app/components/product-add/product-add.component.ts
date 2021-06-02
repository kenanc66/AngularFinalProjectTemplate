import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
import {ErrorModel} from 'src/app/models/errorModel';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  categories: Category[] = [];
  productAddForm : FormGroup;
  constructor(private formBuilder:FormBuilder, 
    private productService:ProductService, private toastrService:ToastrService,private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
    this.createProductAddForm();
  }

  createProductAddForm(){
     this.productAddForm = this.formBuilder.group({
      // ImageUrl:["",Validators.required],
      Name:["",Validators.required],
      categoryId:["",Validators.required],
      recipeExplanation:["", Validators.required],
      ingredients: ["",Validators.required]
    
       
     })
  }
  
  add(){
    if(this.productAddForm.valid){
      let productModel = Object.assign({},this.productAddForm.value)
      productModel.categoryId=Number(productModel.categoryId)
      console.log("model",productModel)
      this.productService.add(productModel).subscribe(response=>{
        this.toastrService.success(response.message,"Success")
      },response=>{
        console.log(response.error)
        if(response.error){
         response.error.Errors.forEach((item:ErrorModel) => {
           this.toastrService.error(item.ErrorMessage
            ,"Validation Error")   
         });
           
        } 
      })
      
    }else{
      this.toastrService.error("Invalid Form Please Fill Correctly","Warning")
    }
    
  }
  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
    });
  }

}