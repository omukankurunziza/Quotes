import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote = [
    new Quote(1, 'Mama give us a sign','Julius Malema',new Date(2018,2,24),"",'Julius malema'),
    new Quote(2, 'Wakanda Forever','Black Panther',new Date(2018,11,24),"","Black Panther" ),
    new Quote(3, 'The patience','amg',new Date(2019,0,20),"","amg") ,
    new Quote(4, 'magic','Notbert',new Date(2019,0,14),"","Norbert"),
    new Quote(5, 'All our dreams can come true','Mandela',new Date(2018,6,24),"mandala",""),

  ];

  toogleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
}

deleteQuote(isComplete,index){
  if (isComplete){
    let toDelete=confirm(`Are you sure you want to delete ${this.quote[index].name}`)
    if(toDelete){
      this.quote.splice(index,1);
  }
}
 
  }

addNewQuote(quotes){
  let quoteLength = this.quote.length;
  quotes.id=quoteLength+1;
  this.quote.unshift(quotes)
  
}


ngOnInit() {
  }
}
