import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  public paymentTabSelectActiveStatus: string = 'net';
  public selectedChipType: string = 'realChip1';
  public price: any = 0;
  public inputPrice;
  public selectValue;
  constructor() { }

  ngOnInit() {
    if (this.selectedChipType === 'realChip1')
      this.price = 5000;
    else
      this.price = 0;
  }

  radioChipSelect(selectedChipType, price) {
    if (price) {
      this.selectedChipType = selectedChipType;
      this.price = price;
    } else {
      this.price = 0;
    }

    if (selectedChipType != 'text') {
      this.inputPrice = undefined;
    }
    if (selectedChipType != 'select') {
      this.selectValue = '';
    }
  }

  paymentTypeTabSelect(paymentType) {
    this.paymentTabSelectActiveStatus = paymentType;
  }

}
