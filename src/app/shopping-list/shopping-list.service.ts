import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";


export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 6)
  ];

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients [index] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredient = (ingredient: Ingredient) => {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  };

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  }
