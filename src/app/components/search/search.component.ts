import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { SearchRecipeService } from 'src/app/services/search-recipe/search-recipe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  public loading: boolean = false;
  public query:string = '';
  public foods: any = [];

  constructor(private service: SearchRecipeService) {}

  ngOnInit(): void { }

  getSearch(): any {
    this.loading = true;
    this.service
      .searchRecipe(this.query).pipe(
        finalize(() => {
          this.loading = false;
        })
      ).subscribe((data:any) => {
        this.foods = data.results;
      });
  }
}
