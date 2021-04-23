import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  currentCategory: Category;
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
    });
  }
  setCurrentCategory(category: Category) {
    this.currentCategory = category;
    let categoryArrange= document.querySelectorAll(".categoryName");
    categoryArrange.forEach((item)=>{
      item.className="categoryName "
      })
  }

  getCurrentCategoryClass(category: Category) {
    if (category == this.currentCategory) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
  muteOthers(){
    let classArrange= document.querySelectorAll(".category");
    classArrange.forEach((item)=>{
    item.className="category list-group-item"
    })
    let categoryArrange = document.querySelectorAll(".categoryName");
    categoryArrange.forEach((item)=>{
      item.className="categoryName hidden"
      })

  }
  getAllCategoryClass() {
    if (!this.currentCategory) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
