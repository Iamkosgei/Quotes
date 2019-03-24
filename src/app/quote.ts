export class Quote {
    public showDescription:boolean;
    public mostVoted:boolean;
    constructor(public id:number, public text:string, public author:string, public postedBy:string,
        public upVote:number, public downVote:number, public datePosted:Date){
            this.showDescription = false;
            this.mostVoted = false;
        }
}
