import { Component, EventEmitter, Output } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-offers-page',
  imports: [],
  templateUrl: './offers-page.component.html',
  styleUrl: './offers-page.component.scss'
})
export class OffersPageComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<OffersPageComponent>) {}

  closeBottomSheet(): void {
    this.bottomSheetRef.dismiss();
  }
}
