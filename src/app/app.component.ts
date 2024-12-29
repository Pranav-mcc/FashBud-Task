import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomescreenComponent } from './homescreen/homescreen.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProductDetailsComponent,HomescreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FashBud';
}
