import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes : Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://www.dessertfortwo.com/wp-content/uploads/2018/11/Schnitzel-2-300x200-300x180.jpg',
      ingredients : ['French fires', 'pork meet', 'salad']
    },
    {
      id: 'r2',
      title: 'Salchipapa',
      imageUrl: 'https://cdn.colombia.com/sdi/2017/01/25/salchipapas-536300.jpg',
      ingredients : ['French fires', 'sausage', 'soda']
    },
    {
      id: 'r3',
      title: 'Water',
      imageUrl: 'http://static1.squarespace.com/static/583ca2f2d482e9bbbef7dad9/58863361d2b857a1707bf488/588677d403596ebc5f1d798b/1534376808162/iStock-5078775151900.jpg?format=1500w',
      ingredients : ['Water']
    }
  ];

  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe =>{
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter( recipe =>{
      return recipe.id !== recipeId;
    });
  }
}
