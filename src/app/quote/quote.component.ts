import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote = [
    new Quote('Dg', 'Julius Malema','Mama give us a sign'),
    new Quote('ACN', 'Black Panther ','Wakanda Forever'),
    new Quote('AM', 'The patience','am') ,
    new Quote('MO', 'magic','nothing'),
    new Quote('CD', 'All our dreams can come true','am'),

  ];

//   toogleDetails(index){
//     this.quote[index].showDescription = !this.quote[index].showDescription;
// }

DeleteQuote(isComplete,index){
  if (isComplete){
    let toDelete=confirm(`Are you sure you want to delete ${this.quote[index].name}`)
    if(toDelete){
      this.quote.splice(index,1)
  }
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
