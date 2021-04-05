import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendListComponent } from './friendslist/friend-list/friend-list.component';
import { HomeComponent } from './home/home.component';
import { FoodlistComponent } from './listing/foodlist/foodlist.component';
import { RestaurantlistComponent } from './listing/restaurantlist/restaurantlist.component';
import { OrderComponent } from './ordering/order/order.component';
import { TrackingComponent } from './ordering/tracking/tracking.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForgotPasswordComponent } from './registration/forgot-password/forgot-password.component';
import { LoginComponent } from './registration/login/login.component';
import { RegistrationComponent } from './registration/registration/registration.component';
import { SettingsComponent } from './registration/settings/settings.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'friend-list', component: FriendListComponent },
  { path: 'foodlist', component: FoodlistComponent },
  { path: 'restaurantList', component: RestaurantlistComponent },
  { path: 'order', component: OrderComponent },
  { path: 'tracking', component: TrackingComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, RegistrationComponent, LoginComponent, ForgotPasswordComponent,
  // tslint:disable-next-line:max-line-length
  SettingsComponent, FriendListComponent, OrderComponent, TrackingComponent, RestaurantlistComponent, FoodlistComponent, PageNotFoundComponent];

