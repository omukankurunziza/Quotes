import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote = [
    new Quote(1, 'Julius Malema'),
    new Quote(2, "You have within you the strength"),
    new Quote(3, 'The patience', ),
    new Quote(4, "A dream doesn't become reality through magic; it takes sweat, determination and hard work"),
    new Quote(5, "All our dreams can come true, if we have the courage to pursue them"),

  ]
  constructor() { }

  ngOnInit() {
  }

}
