import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote = [
    new Quote(1, 'Julius Malema','Mama give us a sign',new Date(2018,7,12)),
    new Quote(2, 'Black Panther ','Wakanda Forever',new Date(2019,0,2)),
    new Quote(3, 'The patience','am',new Date(2018,9,13) ),
    new Quote(4, 'magic','nothing',new Date(2018,4,5)),
    new Quote(5, 'All our dreams can come true','am',new Date(2018,6,18)),

  ]
  toogleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
}

completeQuote(isComplete,index){
  if (isComplete){
      this.quote.splice(index,1);
  // constructor() { }
  // addNewQuote(quotes){
    // let quoteLength = this.quote.length;
    // quote.id=quoteLength+1;
    // quote.completeDate = new Date(quote.completeDate)
    // this.quote.push(quotes)

  }
}
  
 


ngOnInit() {
  }
}
