import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
 bringForm:Boolean =false;
   
  quote: any;
  bringMore: any;
  bless: any;
  addNewQuote(quote:any){
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
   
    this.quote.push(quote);
  }

  deleteQuote(isComplete:any,index:any){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete this quote ${this.quote[index].author}?`)
      if(toDelete){
        this.quote.splice(index,1);
      }
    }

  }


  @Output() Lemi= new EventEmitter();
  showForm: boolean=false;
  
  // submit(me:any, ga:NgForm){
  //   if(me.name=="" || me.title=="" || me.quote==""){
  //     alert("fill the form to proceed")
  //   }else{
  //     this.Lemi.emit(me);
  //     ga.reset()
  //     this.showForm=false;
  //   }
  // };
  
  submit(me:any, ga:NgForm){
    if(me.quote=="" || me.date=="" || me.author=="" || me.submittedby==""){
      alert("fill the form to proceed ASAP")
    }else{
      this.Lemi.emit(me);
      ga.reset()
    }
  };




 toggleReadMore(){
this.bringForm = !this.bringForm
 };

  constructor() { }

  ngOnInit(): void {
  }

}
