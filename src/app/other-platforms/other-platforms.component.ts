import { Component } from '@angular/core';

@Component({
  selector: 'app-other-platforms',
  imports: [],
  templateUrl: './other-platforms.component.html',
  styleUrl: './other-platforms.component.scss'
})
export class OtherPlatformsComponent {

  isPlatformsPopupOpen = false;

  platforms = [
    { name: 'Nykaa', logo: 'assets/nykaa.png' },
    { name: 'Platform 1', logo: 'assets/platform1.png' },
    { name: 'Platform 2', logo: 'assets/platform2.png' },
    { name: 'Platform 3', logo: 'assets/platform3.png' },
    { name: 'More', logo: 'assets/more.png' },
  ];

  togglePlatformsPopup() {
    this.isPlatformsPopupOpen = !this.isPlatformsPopupOpen;
  }
}
