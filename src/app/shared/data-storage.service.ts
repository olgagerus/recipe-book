import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RecipeService} from "../recipes/resipe.service";
import {Recipe} from "../recipes/recipe.model";


@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient,
              private recipeService: RecipeService) {
  }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://recipe-book-yt-16a79-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
      recipes).subscribe(response => {
      console.log(response);
    })
  }

  fetchRecipes() {
    this.http.get<Recipe[]>('https://recipe-book-yt-16a79-default-rtdb.europe-west1.firebasedatabase.app/recipes.' +
      'json').subscribe(recipes => {
      this.recipeService.setRecipes(recipes);
    })

  }
}
