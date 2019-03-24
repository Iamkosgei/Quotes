import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  title = "QUOTES";
  tagline = "Welcome To Your Daily Source Of Inspirational And Motivational Quotes"

  quotes = [
    new Quote(1,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reprehenderit fugiat alias natus laudantium ex quidem perspiciatis quisquam!",
    "lorem ipsum", "jane",0,0,new Date(2019,2,19)
    ),
    new Quote(2,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reprehenderit fugiat alias natus laudantium ex quidem perspiciatis quisquam!",
    "lorem ipsum", "doe",0,0,new Date(2019,2,3)
    ),

    new Quote(3,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reprehenderit fugiat alias natus laudantium ex quidem perspiciatis quisquam!",
    "lorem ipsum", "john",0,0,new Date(2019,2,1)
    ),

    new Quote(4,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reprehenderit fugiat alias natus laudantium ex quidem perspiciatis quisquam!",
    "lorem ipsum", "doe",2,0,new Date(2019,2,23)
    )
  ]

  

  constructor() {
    
   }

  ngOnInit() {
  }

  toggleDetails(i)
  {
    this.quotes[i].showDescription = !this.quotes[i].showDescription
  }

  deleteQuote(i)
  {
      this.quotes.splice(i,1)
  }

  upVoteQuote(index)
  {
    this.quotes[index].upVote = this.quotes[index].upVote +1;

  }

  downVoteQuote(index)
  {
    this.quotes[index].downVote = this.quotes[index].downVote +1;
  }


  mostUpVotedIndex():number
  {
    let mostVotes:number = 0;
    let mostUpVotedQuoteIndex;

    for(let i=0; i<this.quotes.length; i++)
    {
      if(this.quotes[i].upVote>mostVotes){
        mostVotes = this.quotes[i].upVote
        mostUpVotedQuoteIndex = i;
      }
    }
  return mostUpVotedQuoteIndex;
  }

  addNewQuote(quote)
  {
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1; //increment its id

    this.quotes.push(quote)

  }
  
}
