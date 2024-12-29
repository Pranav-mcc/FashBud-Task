import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomescreenComponent } from './homescreen/homescreen.component';

export const routes: Routes = [
    {path:'',component:HomescreenComponent},
    {path:'product',component:ProductDetailsComponent},
    {path:'back',component:HomescreenComponent}
];
