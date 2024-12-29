import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OffersPageComponent } from '../offers-page/offers-page.component';
import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule,OffersPageComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  product = {
    name: 'Harrington Oxford Shoe',
    originalPrice: 1899,
    discountedPrice: 949,
    discount: '50% OFF',
    rating: 4.1,
    delivery: 'Ajio',
    stock: 'Limited Stock Available',
    colors: ['Brown', 'Black', 'Tan'],
    imageUrl: 'assets/shoe.png', 
  }
  constructor(private bottomSheet: MatBottomSheet) {}

  openOfferBottomSheet(): void {
    this.bottomSheet.open(OffersPageComponent, {
      panelClass: 'custom-bottom-sheet', // Custom styling
    });
  }
  };

