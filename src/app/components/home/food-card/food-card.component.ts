import { Component } from '@angular/core';
import { finalize, noop } from 'rxjs';
import { RandomRecipesService } from 'src/app/services/random-recipes/random-recipes.service';
import { SearchRecipeService } from 'src/app/services/search-recipe/search-recipe.service';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.css']
})
export class FoodCardComponent {
  public foods: any = [];
  public loading: boolean = true;
  public loadingMore: boolean = false;
  constructor(
    private randomRecipesService: RandomRecipesService,
    private searchRecipeService :SearchRecipeService,
    ) {}

  ngOnInit():void {
      this.getFoods();
  }

  attFoods(query:string){
    this.foods = this.foods.concat(this.searchRecipeService.searchRecipe(query))
  }

  // Pega as primeiras 6 receitas de modo aleatorio.
  getFoods() {
    this.randomRecipesService.listRandomRecipes(6).pipe(
      finalize(() => {
        this.loading = false;
      })
    ).subscribe((data:any) => {
        this.foods = this.foods.concat(data.recipes)
     });
  }

  // Carrega mais 3 receitas.
  loadMore(){
    this.loading = true;
    this.randomRecipesService.listRandomRecipes(3).pipe(
      finalize(()=>{
        this.loadingMore = false;
      })
    ).subscribe((data:any) =>{
        this.foods = this.foods.concat(data.recipes);
    })
  }

}
