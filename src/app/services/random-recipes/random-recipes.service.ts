import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'config/environment';
@Injectable({
  providedIn: 'root'
})
export class RandomRecipesService {

  constructor(private http:HttpClient) {};
  listRandomRecipes(take: number) {
    const apiKey = environment.apiKey;
    const apiUrl = `https://api.spoonacular.com/recipes/random?number=${take}&apiKey=${apiKey}`
    return this.http.get(apiUrl);
  }
}
