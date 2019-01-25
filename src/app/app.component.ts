import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 
})
export class AppComponent {
  // quote='Dreaming quotes'
  quote: string[];
  //  quote='Dreaming quotes'

  constructor(){

    this.quote = ["Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world","A dream doesn't become reality through magic; it takes sweat, determination and hard work","All our dreams can come true, if we have the courage to pursue them"];
  }
}
