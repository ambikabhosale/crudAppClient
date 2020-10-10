import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delhi',
  templateUrl: './delhi.component.html',
  styleUrls: ['./delhi.component.css']
})
export class DelhiComponent implements OnInit {
  info : any = "The Red Fort is a historic fort in the city of Delhi in India that served as the main residence of the Mughal Emperors. Emperor Shah Jahan commissioned construction of the Red Fort on 12 May 1638, when he decided to shift his capital from Agra to Delhi."

  constructor() { }

  ngOnInit() {
  }

}
