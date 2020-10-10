import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pune',
  templateUrl: './pune.component.html',
  styleUrls: ['./pune.component.css']
})
export class PuneComponent implements OnInit {
  info : any = "Shaniwarwada is a historical fortification in the city of Pune in Maharashtra, India. Built in 1732, it was the seat of the Peshwas of the Maratha Empire until 1818, when the Peshwas lost control to the British East India Company after the Third Anglo-Maratha War."

  constructor() { }

  ngOnInit() {
  }

}
