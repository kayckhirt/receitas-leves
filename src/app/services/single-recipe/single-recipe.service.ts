import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'config/environment';
@Injectable({
  providedIn: 'root'
})
export class SingleRecipeService {

  constructor(private http: HttpClient) {}
  
  takeRecipe(id:number) {
    const apiKey = environment.apiKey;
    const apiURL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;
    return this.http.get(apiURL)
  }

  takeSimilarRecipe(id:number) {
    const apiKey = environment.apiKey;
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/similar?apiKey=${apiKey}`
    return this.http.get(apiUrl);
  }
}
