import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quote;
  @Output() upVoteClicked = new EventEmitter<any>();

  @Output() downVoteClicked = new EventEmitter<any>();

  
  constructor() { }

  ngOnInit() {
  }

  upVote()
  {
    this.upVoteClicked.emit()
  }

  downVote()
  {
    this.downVoteClicked.emit()
  }
}
