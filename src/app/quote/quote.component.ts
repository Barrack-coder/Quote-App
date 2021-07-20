import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote("Barry","Agatha Christie","People should be intrested in books,not theit author.",new Date(2020,1,5)),
    new Quote("Barry","Paulo coelho","You are what you believe.",new Date(2019,2,3)),
    new Quote("Barry","James Baldwin","All art a kind of confession",new Date(2019,2,3)),
    new Quote("Barry","Eleanor Roosevelt","The future belongs to those who believe in the beauty of their dreams",new Date(2019,2,3)),
  ];
 bringForm:Boolean =false;
   
  quote: any;
  bringMore: any;
  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
   
    this.quotes.push(quote);
  }

  deleteQuote(isComplete:any,index:any){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete this quote by ${this.quotes[index].author}?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
    }

  }
 toggleReadMore(){
this.bringForm = !this.bringForm
 };

  constructor() { }

  ngOnInit(): void {
  }

}
