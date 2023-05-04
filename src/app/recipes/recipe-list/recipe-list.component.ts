import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test recipe', 'this is simple test', 'https://cdn.onshop.asia/images/kennymarket/9ea5eeddfc8901d75898.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
