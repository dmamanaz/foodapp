import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantlistComponent } from './restaurantlist/restaurantlist.component';
import { FoodlistComponent } from './foodlist/foodlist.component';



@NgModule({
  declarations: [RestaurantlistComponent, FoodlistComponent],
  imports: [
    CommonModule
  ]
})
export class ListingModule { }
