import { Component, OnInit } from '@angular/core';
// import {Goal} from '../goal';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote(0, "", "",new Date());
  // @Output() addQuote=new EventEmitter<Quote>();

  // submitQuote(){
  //   this.addQuote.emit(this.newQuote);
  // }

  ngOnInit() {
  }

}
