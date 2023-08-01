import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'config/environment';
@Injectable({
  providedIn: 'root'
})
export class SearchRecipeService {

  constructor(private http: HttpClient) {}
  searchRecipe(query:string){
    const apiKey = environment.apiKey;
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&${query}&number=10`;
    return this.http.get(apiUrl);
  }
}
