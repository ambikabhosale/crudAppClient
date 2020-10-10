import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chennai',
  templateUrl: './chennai.component.html',
  styleUrls: ['./chennai.component.css']
})
export class ChennaiComponent implements OnInit {
  info : any = "Kapaleeshwarar Temple is a Hindu temple dedicated to lord Shiva located in Mylapore, Chennai in the Indian state of Tamil Nadu. The form of Shiva's consort Parvati worshipped at this temple is called Karpagambal is from Tami"

  constructor() { }

  ngOnInit() {
  }

}
