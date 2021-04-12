import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BformComponent } from './bform/bform.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { MyproductsComponent } from './myproducts/myproducts.component';
import { HttpClientModule } from '@angular/common/http';
import { HousingService } from './services/housing.service';
import { environment } from 'src/environments/environment';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { AboutComponent } from './about/about.component';


const appRoutes:Routes = [
  {path:"",component:HomeComponent},
  {path:"products",component:ProductsComponent},
  {path:"bform/:id",component:BformComponent},
  {path:"product",component:MyproductsComponent},
  {path:"about",component:AboutComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    BformComponent,
    ProductslistComponent,
    MyproductsComponent,
    FooterComponent,
    HomeComponent,
    CheckoutComponent,
    TestimonialComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
