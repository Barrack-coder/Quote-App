
import { Component, Input, OnInit } from '@angular/core';
// import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  
  // @Input() quote!:Quote;
  // @Output() isComplete = new EventEmitter<boolean>();

  // quoteDelete(complete:boolean){
  //   this.isComplete.emit(complete);
  // }

  // incrementLikes(){
  //   let like = this.quote?.likes;
  //   like++;
  //   this.quote.likes = like;
  // }

  // incrementunlikes(){
  //   let unlike = this.quote.unlikes;
  //   dislike++;
  //   this.quote.unlikes = unlike;
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
