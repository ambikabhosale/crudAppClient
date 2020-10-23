import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is evaluation test';
  public cityData: any = [];
  public newCity:any = {};
  constructor(
    public http: HttpClient,
    public dataService: DataService
  ) {
    this.getData();
  }
  public getData() {
    this.dataService.getCities()
      .subscribe(response => {
        console.log("response", response);
        this.cityData = response;
    });
  }

  public addCity() {
    let data: any = {
      name: this.newCity.name,
      info: this.newCity.info
    }
    this.dataService.addCity(data)
      .subscribe(response => {
        console.log("response", response);
        this.getData();
    });
  }


}
