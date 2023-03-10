import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  ngOnInit(): void {
  }
  recipes: Recipe[] = [
    new Recipe("Kartoffelpizza", "Backe Backe PIZZA, hahahaha", "https://img.chefkoch-cdn.de/rezepte/1028531208071533/bilder/364565/crop-642x428/kartoffelpizza.jpg"),
    new Recipe("Kartoffelpizza", "Backe Backe PIZZA, hahahaha", "https://img.chefkoch-cdn.de/rezepte/1028531208071533/bilder/364565/crop-642x428/kartoffelpizza.jpg")

  ];
}
