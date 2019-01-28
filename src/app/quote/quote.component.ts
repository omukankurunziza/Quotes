import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote = [
    new Quote(1, 'Julius Malema','Mama give us a sign'),
    new Quote(2, 'Black Panther ','Wakanda Forever'),
    new Quote(3, 'The patience','am' ),
    new Quote(4, 'magic','nothing'),
    new Quote(5, 'All our dreams can come true','am'),

  ]
  toogleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
}
completeQuote(isComplete,index){
  if (isComplete){
      this.quote.splice(index,1);
  // constructor() { }

  
  }
}


ngOnInit() {
  }
}
