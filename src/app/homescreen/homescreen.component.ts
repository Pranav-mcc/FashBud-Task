import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homescreen',
  imports: [CommonModule],
  templateUrl: './homescreen.component.html',
  styleUrl: './homescreen.component.scss'
})
export class HomescreenComponent  {
   
  categories = [
    { name: 'Women', image: 'https://www.pngmart.com/files/15/Fashion-Woman-PNG-Transparent.png' ,background:'pink'},
    { name: 'Men', image: 'http://www.pngall.com/wp-content/uploads/5/Attractive-Model-Man-PNG-Image-File.png',background:'grey' },
    { name: 'Bags', image: 'https://www.pngmart.com/files/14/Backpack-Bag-Transparent-PNG.png',background:'#FFCCBC' },
    { name: 'Shoes', image: 'http://pluspng.com/img-png/shoes-png-sneaker-png-transparent-image-2500.png',background:'#FFE0B2' },
    { name: 'Watches', image: 'https://tse3.mm.bing.net/th?id=OIP.FZxC1qp1w7UdgkCY9kiTwgHaHa&pid=Api&P=0&h=180',background:'#A1887F' },
    { name: 'Jeans', image: 'https://tse3.mm.bing.net/th?id=OIP.O05w8k2uQJUxlLjUBTfF_QAAAA&pid=Api&P=0&h=180',background:'blue' }
  ];

  popularProducts = [
    { name: 'T-Shirt', image: 'https://tse4.mm.bing.net/th?id=OIP.3VogawSvKDLYkN8tCveYVgHaHa&pid=Api&P=0&h=180', price: 799 },
    { name: 'Shoes', image: 'https://tse3.mm.bing.net/th?id=OIP.6cUFrCWHJzMriqO2EVzDBwHaHi&pid=Api&P=0&h=180', price: 599 },
    { name: 'Shorts', image: 'https://tse4.mm.bing.net/th?id=OIP.CLE9yNZ7-nfvB5dPVlgRYgHaIW&pid=Api&P=0&h=180', price: 399 }
  ];

  latestArrivals = [...this.popularProducts];

  recommendations = [
    { name: 'Sunglasses', image: 'https://tse2.mm.bing.net/th?id=OIP.3hE4YMhsHOEL-I1hO9WH6gHaDt&pid=Api&P=0&h=180', price: 1300, originalPrice: 1899, discount: 50 },
    { name: 'Formal Shoes', image: 'https://tse1.mm.bing.net/th?id=OIP.edbltm08NN4Y2VzmYkOR9wHaDd&pid=Api&P=0&h=180', price: 699, originalPrice: 1000, discount: 30 },
    { name: 'Smart Watch', image: 'https://tse1.mm.bing.net/th?id=OIP.riCTChIJxQJn2CgpW3EFcAHaHa&pid=Api&P=0&h=180', price: 2111, originalPrice: 3000, discount: 30 },
    { name: 'Puma Jacket', image: 'https://tse3.mm.bing.net/th?id=OIP.ifxu9X22t70BH2S7d63A_gHaHa&pid=Api&P=0&h=180', price: 4099, originalPrice: 5000, discount: 30 }
  ];

  navItems = [
    { name: 'Home', icon: 'https://tse4.mm.bing.net/th?id=OIP.p1zUNYO23cZQzRcwLYSibwHaHa&pid=Api&P=0&h=180' },
    { name: 'Wishlist', icon: 'https://tse3.mm.bing.net/th?id=OIP.SG3fhL0UQgwrDiwaMct2KgHaHa&pid=Api&P=0&h=180' },
    { name: 'Search', icon: 'https://tse1.mm.bing.net/th?id=OIP.saV4jcb6iWcxuaW4QlfWkgHaJb&pid=Api&P=0&h=180' },
    { name: 'Notification', icon: 'https://tse4.mm.bing.net/th?id=OIP.ePVlfP6eyUSLcPpn6rF42wHaHa&pid=Api&P=0&h=180' }
  ];

  constructor(private router: Router) {}

  gotoProduct(): void {
    this.router.navigate(['/product']);
  }
}