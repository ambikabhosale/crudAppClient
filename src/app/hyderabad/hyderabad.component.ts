import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hyderabad',
  templateUrl: './hyderabad.component.html',
  styleUrls: ['./hyderabad.component.css']
})
export class HyderabadComponent implements OnInit {
  @Input() data: any;
  info : any = "The capital city of Telangana, Hyderabad is a popular tourist destination and presents its visitors with a mesmerising contrast of age old traditions, culture at one end and modern facilities, amenities of a metropolitan city at the other end. Hyderabad is one city, which has no dearth of tourist attractions."

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit() {
  }

  delete(params: any) {
    this.dataService.deleteCity(params)
      .subscribe(response => {
        console.log("response", response);
    });
  }
}