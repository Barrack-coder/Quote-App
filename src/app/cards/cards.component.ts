import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  [x: string]: any;
  quotes:Quote[]=[
    new Quote("Barry","Agatha Christie","People should be intrested in books,not theit author.",new Date(2020,1,5)),
    new Quote("Barry","Paulo coelho","You are what you believe.",new Date(2019,2,3)),
    new Quote("Barry","James Baldwin","All art a kind of confession",new Date(2019,2,3)),
    new Quote("Barry","Eleanor Roosevelt","The future belongs to those who believe in the beauty of their dreams",new Date(2019,2,3))
  ];
//  loga(event:any){
//     this.quotes.push(event.title, event.name, event.quote, new Date())
//   //   console.log(event)                          
//   };

    carbon(event:any){
    this.quotes.push(new Quote(event.name, event.author, event.description, new Date()));
    
  }


  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 


 OnInit():void {
  }
} 
  

