import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// Componentes 
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SinglePageComponent } from './components/single-page/single-page.component';
import { FoodCardComponent } from './components/home/food-card/food-card.component';
import { SearchComponent } from './components/search/search.component';
import { MainInformationComponent } from './components/single-page/main-information/main-information.component';
import { SimilarRecipesComponent } from './components/single-page/main-information/similar-recipes/similar-recipes.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SinglePageComponent,
    FoodCardComponent,
    SearchComponent,
    MainInformationComponent,
    SimilarRecipesComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
